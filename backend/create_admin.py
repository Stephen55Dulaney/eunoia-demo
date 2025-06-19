from app import app, db, User, Role
from werkzeug.security import generate_password_hash

def create_admin_user():
    with app.app_context():
        # Create admin user
        admin_email = 'admin@example.com'
        admin_password = 'bpf6dxts'  # Using the provided password
        
        # Check if admin user already exists
        admin = User.query.filter_by(email=admin_email).first()
        if admin:
            # Update existing admin's password
            admin.password = generate_password_hash(admin_password)
            print(f"Admin user {admin_email} password updated")
        else:
            # Create new admin user
            admin = User(
                email=admin_email,
                password=generate_password_hash(admin_password),
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
            print(f"Admin user {admin_email} created successfully")
        
        db.session.commit()

if __name__ == '__main__':
    create_admin_user() 