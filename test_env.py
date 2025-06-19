import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Test variables
print("\nTesting Environment Variables:")
print("-" * 30)

# Check Flask configuration
print("\nFlask Configuration:")
print(f"SECRET_KEY: {'✓ Set' if os.getenv('SECRET_KEY') else '✗ Not Set'}")
print(f"FLASK_ENV: {os.getenv('FLASK_ENV', 'Not Set')}")
print(f"FLASK_APP: {os.getenv('FLASK_APP', 'Not Set')}")
print(f"FLASK_DEBUG: {os.getenv('FLASK_DEBUG', 'Not Set')}")

# Check API keys (just checking if they exist, not showing values)
print("\nAPI Keys:")
print(f"OPENAI_API_KEY: {'✓ Set' if os.getenv('OPENAI_API_KEY') else '✗ Not Set'}")
print(f"ELEVENLABS_API_KEY: {'✓ Set' if os.getenv('ELEVENLABS_API_KEY') else '✗ Not Set'}")
print(f"HUGGINGFACE_API_KEY: {'✓ Set' if os.getenv('HUGGINGFACE_API_KEY') else '✗ Not Set'}")
print(f"TAVILY_API_KEY: {'✓ Set' if os.getenv('TAVILY_API_KEY') else '✗ Not Set'}")

# Check database configuration
print("\nDatabase Configuration:")
print(f"DATABASE_URL: {os.getenv('DATABASE_URL', 'Not Set')}")

# Check model configuration
print("\nModel Configuration:")
print(f"MODEL_NAME: {os.getenv('MODEL_NAME', 'Not Set')}")
print(f"DEVICE: {os.getenv('DEVICE', 'Not Set')}")
print(f"TEMPERATURE: {os.getenv('TEMPERATURE', 'Not Set')}")
print(f"LLM_MODEL: {os.getenv('LLM_MODEL', 'Not Set')}")
print(f"BASE_URL: {os.getenv('BASE_URL', 'Not Set')}") 