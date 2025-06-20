import os
import anthropic
from dotenv import load_dotenv

# Load environment variables from a .env file
load_dotenv()

def test_anthropic_api():
    """
    Tests the Anthropic API by sending a simple message to Claude.
    """
    try:
        # Get the API key from environment variables
        api_key = os.environ.get("ANTHROPIC_API_KEY")
        if not api_key:
            print("Error: ANTHROPIC_API_KEY environment variable not found.")
            print("Please create a .env file in the root directory and add the following line:")
            print("ANTHROPIC_API_KEY='your-api-key-here'")
            return

        # Initialize the Anthropic client
        client = anthropic.Anthropic(api_key=api_key)

        print("Sending a test message to Claude...")

        # Send a simple message to the API
        message = client.messages.create(
            model="claude-3-haiku-20240307",
            max_tokens=50,
            messages=[
                {
                    "role": "user",
                    "content": "Hello, Claude! Please say 'Hello, world!' to confirm you are working."
                }
            ]
        )

        # Print the response from Claude
        response_text = message.content[0].text
        print("\nClaude's Response:")
        print(response_text)
        print("\nAPI test successful!")

    except Exception as e:
        print(f"\nAn error occurred: {e}")
        print("API test failed. Please check your API key and network connection.")

if __name__ == "__main__":
    test_anthropic_api() 