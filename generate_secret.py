import secrets

# Generate a 32-byte (256-bit) key, encoded as URL-safe text
key = secrets.token_urlsafe(32)
print("\nGenerated Secret Key:")
print(key)
print("\nAdd this to your .env file as:")
print(f"SECRET_KEY={key}") 