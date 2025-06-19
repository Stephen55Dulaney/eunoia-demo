from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, abort, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
import os
from dotenv import load_dotenv
import uuid
from agents.orchestrator import orchestrator
from flask_migrate import Migrate
from research_council.prompt_manager.prompt_routes import prompt_bp
from agents.messaging import send_message, get_messages
from agents.memory_companion import memory_companion_bp
from functools import wraps

# Load environment variables
load_dotenv()

# Demo mode configuration
DEMO_MODE = os.getenv('DEMO_MODE', 'false').lower() == 'true'

def demo_or_login_required(f):
    """Decorator that allows access in demo mode or requires login in production"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if DEMO_MODE:
            return f(*args, **kwargs)
        return login_required(f)(*args, **kwargs)
    return decorated_function

app = Flask(__name__, 
            static_folder='../static',
            template_folder='../templates')

# Configuration
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-key-please-change')

# Database configuration - use DATABASE_URL for production (Render), SQLite for local development
database_url = os.getenv('DATABASE_URL')
if database_url:
    # Render provides DATABASE_URL, use it for production
    app.config['SQLALCHEMY_DATABASE_URI'] = database_url
else:
    # Local development - use SQLite
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///eunoia.db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

# Association tables for many-to-many relationships
user_roles = db.Table('user_roles',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('role_id', db.Integer, db.ForeignKey('role.id'), primary_key=True)
)

user_projects = db.Table('user_projects',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'), primary_key=True)
)

# Role model
class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(200))
    permissions = db.relationship('Permission', secondary='role_permissions', backref='roles')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

# Permission model
class Permission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(200))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Role-Permission association table
role_permissions = db.Table('role_permissions',
    db.Column('role_id', db.Integer, db.ForeignKey('role.id'), primary_key=True),
    db.Column('permission_id', db.Integer, db.ForeignKey('permission.id'), primary_key=True)
)

# Project model
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    project_uuid = db.Column(db.String(36), unique=True, default=lambda: str(uuid.uuid4()))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'))
    is_active = db.Column(db.Boolean, default=True)

# Enhanced User model
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    last_login = db.Column(db.DateTime)
    is_active = db.Column(db.Boolean, default=True)
    is_superuser = db.Column(db.Boolean, default=False)
    
    # Relationships
    roles = db.relationship('Role', secondary=user_roles, backref=db.backref('users', lazy='dynamic'))
    projects = db.relationship('Project', secondary=user_projects, backref=db.backref('members', lazy='dynamic'))
    created_projects = db.relationship('Project', backref='creator', lazy='dynamic')

    def has_role(self, role_name):
        return any(role.name == role_name for role in self.roles)

    def has_permission(self, permission_name):
        for role in self.roles:
            if any(permission.name == permission_name for permission in role.permissions):
                return True
        return False

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}" if self.first_name and self.last_name else self.email

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Helper function to create default roles and permissions
def create_default_roles_and_permissions():
    # Create permissions
    permissions = {
        # User Management
        'manage_users': Permission(name='manage_users', description='Can manage user accounts'),
        'manage_roles': Permission(name='manage_roles', description='Can manage roles and permissions'),
        
        # Project Management
        'manage_projects': Permission(name='manage_projects', description='Can manage projects'),
        'view_projects': Permission(name='view_projects', description='Can view projects'),
        'edit_projects': Permission(name='edit_projects', description='Can edit projects'),
        'delete_projects': Permission(name='delete_projects', description='Can delete projects'),
        
        # Research Management
        'manage_research': Permission(name='manage_research', description='Can manage research sessions'),
        'view_research': Permission(name='view_research', description='Can view research data'),
        'conduct_research': Permission(name='conduct_research', description='Can conduct research sessions'),
        'analyze_research': Permission(name='analyze_research', description='Can analyze research data'),
        
        # AI Agent Management
        'manage_ai_agents': Permission(name='manage_ai_agents', description='Can manage AI agents'),
        'view_ai_agents': Permission(name='view_ai_agents', description='Can view AI agent configurations'),
        'train_ai_agents': Permission(name='train_ai_agents', description='Can train AI agents'),
        'deploy_ai_agents': Permission(name='deploy_ai_agents', description='Can deploy AI agents'),
        
        # Interview Management
        'manage_interviews': Permission(name='manage_interviews', description='Can manage interview sessions'),
        'conduct_interviews': Permission(name='conduct_interviews', description='Can conduct interviews'),
        'view_interviews': Permission(name='view_interviews', description='Can view interview data'),
        'analyze_interviews': Permission(name='analyze_interviews', description='Can analyze interview data'),
        
        # Memory and Context Management
        'manage_memory': Permission(name='manage_memory', description='Can manage AI memory systems'),
        'view_memory': Permission(name='view_memory', description='Can view AI memory data'),
        'edit_memory': Permission(name='edit_memory', description='Can edit AI memory data'),
        
        # Prompt Management
        'manage_prompts': Permission(name='manage_prompts', description='Can manage AI prompts'),
        'view_prompts': Permission(name='view_prompts', description='Can view AI prompts'),
        'edit_prompts': Permission(name='edit_prompts', description='Can edit AI prompts'),
        
        # Vector Store Management
        'manage_vector_store': Permission(name='manage_vector_store', description='Can manage vector store'),
        'view_vector_store': Permission(name='view_vector_store', description='Can view vector store data'),
        'edit_vector_store': Permission(name='edit_vector_store', description='Can edit vector store data')
    }

    # Create roles with permissions
    roles = {
        'superuser': Role(name='superuser', description='Superuser with all permissions'),
        'admin': Role(name='admin', description='Administrator with most permissions'),
        'researcher': Role(name='researcher', description='UX Researcher'),
        'designer': Role(name='designer', description='UX Designer'),
        'developer': Role(name='developer', description='Developer'),
        'ai_engineer': Role(name='ai_engineer', description='AI Engineer'),
        'viewer': Role(name='viewer', description='View-only access')
    }

    # Add permissions to roles
    roles['superuser'].permissions = list(permissions.values())
    
    # Admin permissions (all except role management)
    admin_permissions = [p for p in permissions.values() if p.name != 'manage_roles']
    roles['admin'].permissions = admin_permissions
    
    # Researcher permissions
    researcher_permissions = [
        permissions['view_projects'],
        permissions['edit_projects'],
        permissions['manage_research'],
        permissions['view_research'],
        permissions['conduct_research'],
        permissions['analyze_research'],
        permissions['view_ai_agents'],
        permissions['manage_interviews'],
        permissions['conduct_interviews'],
        permissions['view_interviews'],
        permissions['analyze_interviews'],
        permissions['view_memory'],
        permissions['view_prompts'],
        permissions['view_vector_store']
    ]
    roles['researcher'].permissions = researcher_permissions
    
    # Designer permissions
    designer_permissions = [
        permissions['view_projects'],
        permissions['edit_projects'],
        permissions['view_research'],
        permissions['view_ai_agents'],
        permissions['view_interviews'],
        permissions['view_memory'],
        permissions['view_prompts'],
        permissions['view_vector_store']
    ]
    roles['designer'].permissions = designer_permissions
    
    # Developer permissions
    developer_permissions = [
        permissions['view_projects'],
        permissions['edit_projects'],
        permissions['view_research'],
        permissions['view_ai_agents'],
        permissions['view_interviews'],
        permissions['view_memory'],
        permissions['view_prompts'],
        permissions['view_vector_store']
    ]
    roles['developer'].permissions = developer_permissions
    
    # AI Engineer permissions
    ai_engineer_permissions = [
        permissions['view_projects'],
        permissions['edit_projects'],
        permissions['view_research'],
        permissions['manage_ai_agents'],
        permissions['view_ai_agents'],
        permissions['train_ai_agents'],
        permissions['deploy_ai_agents'],
        permissions['manage_memory'],
        permissions['view_memory'],
        permissions['edit_memory'],
        permissions['manage_prompts'],
        permissions['view_prompts'],
        permissions['edit_prompts'],
        permissions['manage_vector_store'],
        permissions['view_vector_store'],
        permissions['edit_vector_store']
    ]
    roles['ai_engineer'].permissions = ai_engineer_permissions
    
    # Viewer permissions (minimal access)
    viewer_permissions = [
        permissions['view_projects'],
        permissions['view_research'],
        permissions['view_interviews']
    ]
    roles['viewer'].permissions = viewer_permissions

    # Add to database
    for permission in permissions.values():
        db.session.add(permission)
    
    for role in roles.values():
        db.session.add(role)
    
    db.session.commit()

# Initialize database with default roles and permissions
def init_db():
    with app.app_context():
        # Create all tables
        db.create_all()
        
        # Check if we need to create default roles and permissions
        if not Role.query.first():
            create_default_roles_and_permissions()
            
            # Create admin user if it doesn't exist
            admin = User.query.filter_by(email='admin@example.com').first()
            if not admin:
                admin = User(
                    email='admin@example.com',
                    password=generate_password_hash('bpf6dxts'),
                    first_name='Admin',
                    last_name='User',
                    is_active=True,
                    is_superuser=True
                )
                
                # Get superuser role
                superuser_role = Role.query.filter_by(name='superuser').first()
                if superuser_role:
                    admin.roles.append(superuser_role)
                
                db.session.add(admin)
                db.session.commit()
                print("Admin user created successfully")

# Initialize the database
init_db()

# Routes
@app.route('/')
@demo_or_login_required
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        print(f"Login attempt for email: {email}")  # Debug log
        
        user = User.query.filter_by(email=email).first()
        if user:
            print(f"User found: {user.email}")  # Debug log
            print(f"User is active: {user.is_active}")  # Debug log
            print(f"User has roles: {[role.name for role in user.roles]}")  # Debug log
            
            if check_password_hash(user.password, password):
                print("Password check passed")  # Debug log
                login_user(user)
                user.last_login = datetime.utcnow()
                db.session.commit()
                
                next_page = request.args.get('next')
                return redirect(next_page or url_for('home'))
            else:
                print("Password check failed")  # Debug log
        else:
            print("User not found")  # Debug log
            
        flash('Invalid email or password')
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        
        if User.query.filter_by(email=email).first():
            flash('Email already registered')
            return redirect(url_for('register'))
        
        # Create new user
        user = User(
            email=email,
            password=generate_password_hash(password),
            first_name=first_name,
            last_name=last_name
        )
        
        # Assign default role (viewer)
        viewer_role = Role.query.filter_by(name='viewer').first()
        if viewer_role:
            user.roles.append(viewer_role)
        
        db.session.add(user)
        db.session.commit()
        
        login_user(user)
        return redirect(url_for('home'))
    return render_template('register.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

# Protected case study routes
@app.route('/case-studies/ai-interview-assistant')
@demo_or_login_required
def ai_interview_assistant():
    return render_template('case_studies/ai_interview_assistant.html')

@app.route('/case-studies/user-authentication')
@demo_or_login_required
def user_authentication():
    return render_template('case_studies/user_authentication.html')

@app.route('/case-studies/amazon-leave-portal')
@demo_or_login_required
def amazon_leave_portal():
    return render_template('case_studies/amazon_leave_portal.html')

@app.route('/case-studies/cover-oregon')
@demo_or_login_required
def cover_oregon():
    return render_template('case_studies/cover_oregon.html')

@app.route('/case-studies/eunoia-research-council')
@demo_or_login_required
def eunoia_research_council():
    return render_template('case_studies/eunoia_research_council.html')

@app.route('/case-studies/eunoia-memory-companion')
@demo_or_login_required
def eunoia_memory_companion():
    return render_template('case_studies/eunoia_memory_companion.html')

# User management routes
@app.route('/users')
@login_required
def user_list():
    if not current_user.has_permission('manage_users'):
        flash('You do not have permission to view users')
        return redirect(url_for('home'))
    
    users = User.query.all()
    return render_template('users/list.html', users=users)

@app.route('/users/<int:user_id>/edit', methods=['GET', 'POST'])
@login_required
def edit_user(user_id):
    if not current_user.has_permission('manage_users'):
        flash('You do not have permission to edit users')
        return redirect(url_for('home'))
    
    user = User.query.get_or_404(user_id)
    
    if request.method == 'POST':
        user.first_name = request.form.get('first_name')
        user.last_name = request.form.get('last_name')
        user.email = request.form.get('email')
        user.is_active = bool(request.form.get('is_active'))
        
        # Update roles
        user.roles = []
        for role_id in request.form.getlist('roles'):
            role = Role.query.get(role_id)
            if role:
                user.roles.append(role)
        
        db.session.commit()
        flash('User updated successfully')
        return redirect(url_for('user_list'))
    
    roles = Role.query.all()
    return render_template('users/edit.html', user=user, roles=roles)

@app.route('/users/new', methods=['GET', 'POST'])
@login_required
def new_user():
    if not current_user.has_permission('manage_users'):
        flash('You do not have permission to create users')
        return redirect(url_for('home'))
    
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        
        if User.query.filter_by(email=email).first():
            flash('Email already registered')
            return redirect(url_for('new_user'))
        
        # Create new user
        user = User(
            email=email,
            password=generate_password_hash(password),
            first_name=first_name,
            last_name=last_name,
            is_active=True
        )
        
        # Assign roles
        for role_id in request.form.getlist('roles'):
            role = Role.query.get(role_id)
            if role:
                user.roles.append(role)
        
        db.session.add(user)
        db.session.commit()
        flash('User created successfully')
        return redirect(url_for('user_list'))
    
    roles = Role.query.all()
    return render_template('users/new.html', roles=roles)

# Project management routes
@app.route('/projects')
@login_required
def project_list():
    if not current_user.has_permission('view_projects'):
        flash('You do not have permission to view projects')
        return redirect(url_for('home'))
    
    projects = Project.query.all()
    return render_template('projects/list.html', projects=projects)

@app.route('/projects/new', methods=['GET', 'POST'])
@login_required
def new_project():
    if not current_user.has_permission('manage_projects'):
        flash('You do not have permission to create projects')
        return redirect(url_for('home'))
    
    if request.method == 'POST':
        project = Project(
            name=request.form.get('name'),
            description=request.form.get('description'),
            created_by=current_user.id
        )
        db.session.add(project)
        db.session.commit()
        flash('Project created successfully')
        return redirect(url_for('project_list'))
    
    return render_template('projects/new.html')

# API Routes
@app.route('/api/users', methods=['GET'])
@login_required
def api_users():
    if not current_user.has_permission('manage_users'):
        return jsonify({'error': 'Permission denied'}), 403
    
    users = User.query.all()
    return jsonify({
        'users': [{
            'id': user.id,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'is_active': user.is_active,
            'roles': [role.name for role in user.roles],
            'created_at': user.created_at.isoformat(),
            'last_login': user.last_login.isoformat() if user.last_login else None
        } for user in users]
    })

@app.route('/api/users/<int:user_id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def api_user(user_id):
    if not current_user.has_permission('manage_users'):
        return jsonify({'error': 'Permission denied'}), 403
    
    user = User.query.get_or_404(user_id)
    
    if request.method == 'GET':
        return jsonify({
            'id': user.id,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'is_active': user.is_active,
            'roles': [role.name for role in user.roles],
            'created_at': user.created_at.isoformat(),
            'last_login': user.last_login.isoformat() if user.last_login else None
        })
    
    elif request.method == 'PUT':
        data = request.get_json()
        
        if 'email' in data:
            user.email = data['email']
        if 'first_name' in data:
            user.first_name = data['first_name']
        if 'last_name' in data:
            user.last_name = data['last_name']
        if 'is_active' in data:
            user.is_active = data['is_active']
        if 'roles' in data:
            user.roles = []
            for role_name in data['roles']:
                role = Role.query.filter_by(name=role_name).first()
                if role:
                    user.roles.append(role)
        
        db.session.commit()
        return jsonify({'message': 'User updated successfully'})
    
    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'User deleted successfully'})

@app.route('/api/projects', methods=['GET', 'POST'])
@login_required
def api_projects():
    if request.method == 'GET':
        if not current_user.has_permission('view_projects'):
            return jsonify({'error': 'Permission denied'}), 403
        
        projects = Project.query.all()
        return jsonify({
            'projects': [{
                'id': project.id,
                'name': project.name,
                'description': project.description,
                'project_uuid': project.project_uuid,
                'is_active': project.is_active,
                'created_at': project.created_at.isoformat(),
                'updated_at': project.updated_at.isoformat(),
                'created_by': project.created_by,
                'member_count': project.members.count()
            } for project in projects]
        })
    
    elif request.method == 'POST':
        if not current_user.has_permission('manage_projects'):
            return jsonify({'error': 'Permission denied'}), 403
        
        data = request.get_json()
        project = Project(
            name=data['name'],
            description=data.get('description', ''),
            created_by=current_user.id,
            is_active=data.get('is_active', True)
        )
        
        # Add members
        if 'members' in data:
            for user_id in data['members']:
                user = User.query.get(user_id)
                if user:
                    project.members.append(user)
        
        db.session.add(project)
        db.session.commit()
        
        return jsonify({
            'message': 'Project created successfully',
            'project': {
                'id': project.id,
                'name': project.name,
                'project_uuid': project.project_uuid
            }
        })

@app.route('/api/projects/<int:project_id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def api_project(project_id):
    project = Project.query.get_or_404(project_id)
    
    if request.method == 'GET':
        if not current_user.has_permission('view_projects'):
            return jsonify({'error': 'Permission denied'}), 403
        
        return jsonify({
            'id': project.id,
            'name': project.name,
            'description': project.description,
            'project_uuid': project.project_uuid,
            'is_active': project.is_active,
            'created_at': project.created_at.isoformat(),
            'updated_at': project.updated_at.isoformat(),
            'created_by': project.created_by,
            'members': [{
                'id': member.id,
                'email': member.email,
                'first_name': member.first_name,
                'last_name': member.last_name
            } for member in project.members]
        })
    
    elif request.method == 'PUT':
        if not current_user.has_permission('edit_projects'):
            return jsonify({'error': 'Permission denied'}), 403
        
        data = request.get_json()
        
        if 'name' in data:
            project.name = data['name']
        if 'description' in data:
            project.description = data['description']
        if 'is_active' in data:
            project.is_active = data['is_active']
        if 'members' in data:
            project.members = []
            for user_id in data['members']:
                user = User.query.get(user_id)
                if user:
                    project.members.append(user)
        
        db.session.commit()
        return jsonify({'message': 'Project updated successfully'})
    
    elif request.method == 'DELETE':
        if not current_user.has_permission('delete_projects'):
            return jsonify({'error': 'Permission denied'}), 403
        
        db.session.delete(project)
        db.session.commit()
        return jsonify({'message': 'Project deleted successfully'})

# Add project member management endpoints
@app.route('/api/projects/<int:project_id>/members', methods=['GET', 'POST', 'DELETE'])
@login_required
def api_project_members(project_id):
    project = Project.query.get_or_404(project_id)
    
    if request.method == 'GET':
        if not current_user.has_permission('view_projects'):
            return jsonify({'error': 'Permission denied'}), 403
        
        return jsonify({
            'members': [{
                'id': member.id,
                'email': member.email,
                'first_name': member.first_name,
                'last_name': member.last_name,
                'roles': [role.name for role in member.roles]
            } for member in project.members]
        })
    
    elif request.method == 'POST':
        if not current_user.has_permission('edit_projects'):
            return jsonify({'error': 'Permission denied'}), 403
        
        data = request.get_json()
        user_id = data.get('user_id')
        
        if not user_id:
            return jsonify({'error': 'user_id is required'}), 400
        
        user = User.query.get(user_id)
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user in project.members:
            return jsonify({'error': 'User is already a member'}), 400
        
        project.members.append(user)
        db.session.commit()
        
        return jsonify({
            'message': 'Member added successfully',
            'member': {
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name
            }
        })
    
    elif request.method == 'DELETE':
        if not current_user.has_permission('edit_projects'):
            return jsonify({'error': 'Permission denied'}), 403
        
        data = request.get_json()
        user_id = data.get('user_id')
        
        if not user_id:
            return jsonify({'error': 'user_id is required'}), 400
        
        user = User.query.get(user_id)
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        if user not in project.members:
            return jsonify({'error': 'User is not a member'}), 400
        
        project.members.remove(user)
        db.session.commit()
        
        return jsonify({'message': 'Member removed successfully'})

# Role management routes
@app.route('/roles')
@login_required
def role_list():
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to view roles')
        return redirect(url_for('home'))
    
    roles = Role.query.all()
    return render_template('roles/list.html', roles=roles)

@app.route('/roles/new', methods=['GET', 'POST'])
@login_required
def new_role():
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to create roles')
        return redirect(url_for('home'))
    
    if request.method == 'POST':
        name = request.form.get('name')
        description = request.form.get('description')
        
        if Role.query.filter_by(name=name).first():
            flash('Role name already exists')
            return redirect(url_for('new_role'))
        
        role = Role(name=name, description=description)
        
        # Add permissions
        for permission_id in request.form.getlist('permissions'):
            permission = Permission.query.get(permission_id)
            if permission:
                role.permissions.append(permission)
        
        db.session.add(role)
        db.session.commit()
        flash('Role created successfully')
        return redirect(url_for('role_list'))
    
    permissions = Permission.query.all()
    return render_template('roles/new.html', permissions=permissions)

@app.route('/roles/<int:role_id>/edit', methods=['GET', 'POST'])
@login_required
def edit_role(role_id):
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to edit roles')
        return redirect(url_for('home'))
    
    role = Role.query.get_or_404(role_id)
    
    if request.method == 'POST':
        role.name = request.form.get('name')
        role.description = request.form.get('description')
        
        # Update permissions
        role.permissions = []
        for permission_id in request.form.getlist('permissions'):
            permission = Permission.query.get(permission_id)
            if permission:
                role.permissions.append(permission)
        
        db.session.commit()
        flash('Role updated successfully')
        return redirect(url_for('role_list'))
    
    permissions = Permission.query.all()
    return render_template('roles/edit.html', role=role, permissions=permissions)

@app.route('/roles/<int:role_id>/delete', methods=['POST'])
@login_required
def delete_role(role_id):
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to delete roles')
        return redirect(url_for('home'))
    
    role = Role.query.get_or_404(role_id)
    
    # Check if role is assigned to any users
    if role.users.count() > 0:
        flash('Cannot delete role that is assigned to users')
        return redirect(url_for('role_list'))
    
    db.session.delete(role)
    db.session.commit()
    flash('Role deleted successfully')
    return redirect(url_for('role_list'))

# Admin routes
@app.route('/admin')
@login_required
def admin_dashboard():
    if not current_user.has_permission('manage_users'):
        flash('You do not have permission to access admin dashboard')
        return redirect(url_for('home'))
    
    # Get statistics
    user_count = User.query.count()
    role_count = Role.query.count()
    permission_count = Permission.query.count()
    active_users = User.query.filter_by(is_active=True).count()
    project_count = Project.query.count()
    recent_logins = User.query.filter(User.last_login >= datetime.utcnow() - timedelta(days=1)).count()
    
    # Get recent activities (you'll need to implement activity logging)
    recent_activities = []  # Placeholder for now
    
    return render_template('admin/dashboard.html',
                         user_count=user_count,
                         role_count=role_count,
                         permission_count=permission_count,
                         active_users=active_users,
                         project_count=project_count,
                         recent_logins=recent_logins,
                         recent_activities=recent_activities)

@app.route('/admin/users')
@login_required
def admin_user_list():
    if not current_user.has_permission('manage_users'):
        flash('You do not have permission to view users')
        return redirect(url_for('home'))
    
    users = User.query.all()
    return render_template('users/list.html', users=users)

@app.route('/admin/users/new', methods=['GET', 'POST'])
@login_required
def admin_new_user():
    if not current_user.has_permission('manage_users'):
        flash('You do not have permission to create users')
        return redirect(url_for('home'))
    
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        
        if User.query.filter_by(email=email).first():
            flash('Email already registered')
            return redirect(url_for('admin_new_user'))
        
        user = User(
            email=email,
            password=generate_password_hash(password),
            first_name=first_name,
            last_name=last_name,
            is_active=True
        )
        
        for role_id in request.form.getlist('roles'):
            role = Role.query.get(role_id)
            if role:
                user.roles.append(role)
        
        db.session.add(user)
        db.session.commit()
        
        # Log the activity
        log_activity(
            current_user.id,
            'create_user',
            f'Created new user: {user.email}'
        )
        
        flash('User created successfully')
        return redirect(url_for('admin_user_list'))
    
    roles = Role.query.all()
    return render_template('users/new.html', roles=roles)

@app.route('/admin/users/<int:user_id>/edit', methods=['GET', 'POST'])
@login_required
def admin_edit_user(user_id):
    if not current_user.has_permission('manage_users'):
        flash('You do not have permission to edit users')
        return redirect(url_for('home'))
    
    user = User.query.get_or_404(user_id)
    
    if request.method == 'POST':
        user.first_name = request.form.get('first_name')
        user.last_name = request.form.get('last_name')
        user.email = request.form.get('email')
        user.is_active = bool(request.form.get('is_active'))
        
        user.roles = []
        for role_id in request.form.getlist('roles'):
            role = Role.query.get(role_id)
            if role:
                user.roles.append(role)
        
        db.session.commit()
        flash('User updated successfully')
        return redirect(url_for('admin_user_list'))
    
    roles = Role.query.all()
    return render_template('users/edit.html', user=user, roles=roles)

@app.route('/admin/roles')
@login_required
def admin_role_list():
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to view roles')
        return redirect(url_for('home'))
    
    roles = Role.query.all()
    return render_template('roles/list.html', roles=roles)

@app.route('/admin/roles/new', methods=['GET', 'POST'])
@login_required
def admin_new_role():
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to create roles')
        return redirect(url_for('home'))
    
    if request.method == 'POST':
        name = request.form.get('name')
        description = request.form.get('description')
        
        if Role.query.filter_by(name=name).first():
            flash('Role name already exists')
            return redirect(url_for('admin_new_role'))
        
        role = Role(name=name, description=description)
        
        for permission_id in request.form.getlist('permissions'):
            permission = Permission.query.get(permission_id)
            if permission:
                role.permissions.append(permission)
        
        db.session.add(role)
        db.session.commit()
        flash('Role created successfully')
        return redirect(url_for('admin_role_list'))
    
    permissions = Permission.query.all()
    return render_template('roles/new.html', permissions=permissions)

@app.route('/admin/roles/<int:role_id>/edit', methods=['GET', 'POST'])
@login_required
def admin_edit_role(role_id):
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to edit roles')
        return redirect(url_for('home'))
    
    role = Role.query.get_or_404(role_id)
    
    if request.method == 'POST':
        role.name = request.form.get('name')
        role.description = request.form.get('description')
        
        role.permissions = []
        for permission_id in request.form.getlist('permissions'):
            permission = Permission.query.get(permission_id)
            if permission:
                role.permissions.append(permission)
        
        db.session.commit()
        flash('Role updated successfully')
        return redirect(url_for('admin_role_list'))
    
    permissions = Permission.query.all()
    return render_template('roles/edit.html', role=role, permissions=permissions)

@app.route('/admin/roles/<int:role_id>/delete', methods=['POST'])
@login_required
def admin_delete_role(role_id):
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to delete roles')
        return redirect(url_for('home'))
    
    role = Role.query.get_or_404(role_id)
    
    if role.users.count() > 0:
        flash('Cannot delete role that is assigned to users')
        return redirect(url_for('admin_role_list'))
    
    db.session.delete(role)
    db.session.commit()
    flash('Role deleted successfully')
    return redirect(url_for('admin_role_list'))

@app.route('/admin/permissions')
@login_required
def admin_permission_list():
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to view permissions')
        return redirect(url_for('home'))
    
    permissions = Permission.query.all()
    return render_template('permissions/list.html', permissions=permissions)

@app.route('/admin/permissions/new', methods=['GET', 'POST'])
@login_required
def admin_new_permission():
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to create permissions')
        return redirect(url_for('home'))
    
    if request.method == 'POST':
        name = request.form.get('name')
        description = request.form.get('description')
        
        if Permission.query.filter_by(name=name).first():
            flash('Permission name already exists')
            return redirect(url_for('admin_new_permission'))
        
        permission = Permission(name=name, description=description)
        db.session.add(permission)
        db.session.commit()
        flash('Permission created successfully')
        return redirect(url_for('admin_permission_list'))
    
    return render_template('permissions/new.html')

@app.route('/admin/permissions/<int:permission_id>/edit', methods=['GET', 'POST'])
@login_required
def admin_edit_permission(permission_id):
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to edit permissions')
        return redirect(url_for('home'))
    
    permission = Permission.query.get_or_404(permission_id)
    
    if request.method == 'POST':
        permission.name = request.form.get('name')
        permission.description = request.form.get('description')
        db.session.commit()
        flash('Permission updated successfully')
        return redirect(url_for('admin_permission_list'))
    
    return render_template('permissions/edit.html', permission=permission)

@app.route('/admin/permissions/<int:permission_id>/delete', methods=['POST'])
@login_required
def admin_delete_permission(permission_id):
    if not current_user.has_permission('manage_roles'):
        flash('You do not have permission to delete permissions')
        return redirect(url_for('home'))
    
    permission = Permission.query.get_or_404(permission_id)
    
    if permission.roles.count() > 0:
        flash('Cannot delete permission that is assigned to roles')
        return redirect(url_for('admin_permission_list'))
    
    db.session.delete(permission)
    db.session.commit()
    flash('Permission deleted successfully')
    return redirect(url_for('admin_permission_list'))

# Activity log routes
@app.route('/admin/activity-log')
@login_required
def admin_activity_log():
    if not current_user.has_permission('manage_users'):
        flash('You do not have permission to view activity logs')
        return redirect(url_for('home'))
    
    # Get activities from the last 30 days by default
    activities = Activity.query.order_by(Activity.timestamp.desc()).limit(100).all()
    return render_template('admin/activity_log.html', activities=activities)

# Helper function to log activities
def log_activity(user_id, action, details=None):
    activity = Activity(
        user_id=user_id,
        action=action,
        details=details
    )
    db.session.add(activity)
    db.session.commit()

# Add new models for interview sessions
class InterviewSession(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    end_time = db.Column(db.DateTime)
    status = db.Column(db.String(20), nullable=False, default='active')  # active, completed, abandoned
    session_history = db.Column(db.Text)
    
    user = db.relationship('User', backref=db.backref('interview_sessions', lazy=True))

@app.route('/interview')
@login_required
def interview():
    """Start a new interview session"""
    # Create a new session
    session = InterviewSession(user_id=current_user.id)
    db.session.add(session)
    db.session.commit()
    
    return render_template('interview/index.html', session=session)

@app.route('/interview/<int:session_id>/message', methods=['POST'])
@login_required
def process_message(session_id):
    """Process a message in the interview session"""
    session = InterviewSession.query.get_or_404(session_id)
    
    # Verify the session belongs to the current user
    if session.user_id != current_user.id:
        abort(403)
    
    # Get the message from the request
    message = request.json.get('message')
    if not message:
        return jsonify({'error': 'No message provided'}), 400
    
    # Process the message through the orchestrator
    response = orchestrator.process_message(message, session.session_history)
    
    # Update session history
    session.session_history = response['session_history']
    db.session.commit()
    
    return jsonify(response)

@app.route('/interview/<int:session_id>/end', methods=['POST'])
@login_required
def end_session(session_id):
    """End an interview session"""
    session = InterviewSession.query.get_or_404(session_id)
    
    # Verify the session belongs to the current user
    if session.user_id != current_user.id:
        abort(403)
    
    # Update session status
    session.status = 'completed'
    session.end_time = datetime.utcnow()
    db.session.commit()
    
    return jsonify({'status': 'success'})

# Error handlers
@app.errorhandler(404)
def not_found_error(error):
    return render_template('errors/404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return render_template('errors/500.html'), 500

# Add new models for activity logging
class Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    action = db.Column(db.String(100), nullable=False)
    details = db.Column(db.Text)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

# Register the prompt blueprint
app.register_blueprint(prompt_bp)

@app.route('/demo-messaging/send', methods=['POST'])
def demo_send_message():
    """Send a message from Eunoia to Synthia (demo)"""
    data = request.get_json() or {}
    content = data.get('content', 'Hello from Eunoia!')
    message = {
        'sender': 'Eunoia',
        'receiver': 'Synthia',
        'type': 'command',
        'content': content,
        'timestamp': datetime.utcnow().isoformat()
    }
    send_message('synthia_inbox', message)
    return jsonify({'status': 'sent', 'message': message})

@app.route('/demo-messaging/inbox', methods=['GET'])
def demo_view_inbox():
    """View Synthia's inbox (last 10 messages)"""
    messages = get_messages('synthia_inbox', max_messages=10)
    return jsonify({'inbox': messages})

# Register the memory_companion_bp blueprint
app.register_blueprint(memory_companion_bp)

@app.route('/memory-companion-demo')
@demo_or_login_required
def memory_companion_demo():
    return render_template('agents/memory_companion/eunoia_memory_companion.html')

@app.route('/cover-oregon-prototype/')
@app.route('/cover-oregon-prototype/<path:filename>')
def cover_oregon_prototype(filename='index.html'):
    return send_from_directory('static/cover_oregon_prototype/html', filename)

if __name__ == '__main__':
    app.run(debug=True, port=5050) 