from app import app, db, User, Role, Permission
from werkzeug.security import generate_password_hash

def debug_database():
    with app.app_context():
        print("=== Database Debug Information ===")
        
        # Check if tables exist
        print("\n1. Checking database tables:")
        try:
            # Try to query each table
            users = User.query.all()
            roles = Role.query.all()
            permissions = Permission.query.all()
            print("✓ All tables exist and are accessible")
        except Exception as e:
            print(f"✗ Error accessing tables: {str(e)}")
            return

        # Check roles and permissions
        print("\n2. Checking roles and permissions:")
        print(f"Number of roles: {len(roles)}")
        for role in roles:
            print(f"\nRole: {role.name}")
            print(f"Permissions: {[p.name for p in role.permissions]}")
        
        # Check admin user
        print("\n3. Checking admin user:")
        admin = User.query.filter_by(email='admin@example.com').first()
        if admin:
            print("Admin user found:")
            print(f"Email: {admin.email}")
            print(f"First Name: {admin.first_name}")
            print(f"Last Name: {admin.last_name}")
            print(f"Is Active: {admin.is_active}")
            print(f"Is Superuser: {admin.is_superuser}")
            print(f"Roles: {[role.name for role in admin.roles]}")
            print(f"Password hash: {admin.password[:20]}...")
        else:
            print("Admin user not found!")
            
            # Create admin user
            print("\nCreating admin user...")
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
                print("Superuser role assigned")
            else:
                print("Warning: Superuser role not found!")
            
            db.session.add(admin)
            db.session.commit()
            print("Admin user created successfully")

if __name__ == '__main__':
    debug_database() 