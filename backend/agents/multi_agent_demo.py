import yaml
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.chains import ConversationChain
import os

# --- Load Synthia's prompt from YAML ---
with open("Daria/langchain_features/prompt_manager/prompts/synthia.yml", "r") as f:
    synthia_yaml = yaml.safe_load(f)

synthia_prompt_text = synthia_yaml["dynamic_prompt_prefix"]

daria_prompt_text = (
    "You are Daria, a research project manager. "
    "Help the user start a new research project. "
    "If the user mentions discovery planning, bring in Synthia."
)

llm = ChatOpenAI(temperature=0.2)

daria_chain = ConversationChain(
    llm=llm,
    prompt=ChatPromptTemplate.from_template("{history}\nUser: {input}\nDaria: " + daria_prompt_text)
)
synthia_chain = ConversationChain(
    llm=llm,
    prompt=ChatPromptTemplate.from_template("{history}\nUser: {input}\nSynthia: " + synthia_prompt_text)
)

def orchestrate_conversation():
    history = ""
    print("Hi Cade! We are here to introduce you to the wonderful world of conversational AI.\n")
    print("You are talking to Daria. Type 'exit' to quit.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "exit":
            break

        # Daria responds first
        daria_response = daria_chain.predict(input=user_input, history=history)
        print("Daria:", daria_response)
        history += f"\nUser: {user_input}\nDaria: {daria_response}"

        # If user or Daria mentions discovery, bring in Synthia
        if "discovery" in user_input.lower() or "discovery" in daria_response.lower():
            print("\nSynthia joins the conversation!")
            synthia_response = synthia_chain.predict(input=user_input, history=history)
            print("Synthia:", synthia_response)
            history += f"\nSynthia: {synthia_response}"

if __name__ == "__main__":
    orchestrate_conversation() 