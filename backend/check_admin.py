from app import app, User, Role

def check_admin_user():
    with app.app_context():
        # Check admin user
        admin = User.query.filter_by(email='admin@example.com').first()
        if admin:
            print("Admin user found:")
            print(f"Email: {admin.email}")
            print(f"First Name: {admin.first_name}")
            print(f"Last Name: {admin.last_name}")
            print(f"Is Active: {admin.is_active}")
            print(f"Is Superuser: {admin.is_superuser}")
            print("Roles:", [role.name for role in admin.roles])
        else:
            print("Admin user not found!")
            
        # Check if superuser role exists
        superuser_role = Role.query.filter_by(name='superuser').first()
        if superuser_role:
            print("\nSuperuser role found with permissions:")
            print([p.name for p in superuser_role.permissions])
        else:
            print("\nSuperuser role not found!")

if __name__ == '__main__':
    check_admin_user() 