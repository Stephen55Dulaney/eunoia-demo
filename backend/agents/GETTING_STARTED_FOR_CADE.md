# Getting Started: Multi-Agent Conversational AI Demo for Cade

Welcome, Cade! This guide will help you set up and run a multi-agent conversational AI demo using LangChain and robust YAML prompts. You'll also learn how to extend the system and, if you wish, add text-to-speech (TTS) and speech-to-text (STT) features on your own machine.

## 1. Prerequisites
- Python 3.10 or 3.11 recommended
- An OpenAI API key (for LLM access)
- (Optional) ElevenLabs API key for TTS

## 2. Setup Instructions

### A. Clone the Project and Install Dependencies
```bash
git clone <your-repo-url>
cd <your-repo-directory>
pip install -r requirements.txt
```

### B. Add Your API Keys
Create a `.env` file in the project root:
```
OPENAI_API_KEY=your_openai_api_key_here
# Optional for TTS:
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
```

### C. Run the Multi-Agent Demo
```bash
python multi_agent_demo.py
```

You'll be greeted by Daria and can start a conversation. If you mention discovery planning, Synthia will join and ask you questions to help build a discovery plan.

## 3. How to Extend
- Add more YAML prompt files for new agents (see `Daria/langchain_features/prompt_manager/prompts/`)
- Add more logic to orchestrate when agents join the conversation
- Store user answers in a dictionary and use them to generate structured plans
- (Optional) Integrate TTS/STT as described below

## 4. Adding TTS/STT (Optional, for Cade's Machine)
- See `README_ELEVENLABS.md` for ElevenLabs TTS setup
- For STT, you can use packages like `speech_recognition` or `whisper` (OpenAI)
- Install extra dependencies as needed:
  ```bash
  pip install elevenlabs sounddevice numpy
  # For STT:
  pip install speechrecognition
  ```
- Update your script to use TTS for agent responses and STT for user input

## 5. Troubleshooting
- Make sure your API keys are valid and in your `.env` file
- If you have issues with TTS/STT, comment out those lines and run the core demo

## 6. Next Steps
- Try building your own agent!
- Experiment with different prompts and conversation flows
- Have fun exploring the world of conversational AI! 