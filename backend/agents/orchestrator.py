import yaml
import os
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.runnables import RunnableSequence
from langchain_core.messages import HumanMessage, AIMessage
from datetime import datetime

class AgentOrchestrator:
    def __init__(self):
        self.llm = ChatOpenAI(temperature=0.2)
        self.load_agents()
        
    def get_session_history(self, session_id, *args, **kwargs):
        # For now, just return the history passed in (or implement your own session store)
        return kwargs.get("history", [])

    def load_agents(self):
        # Load agent prompts from YAML files
        agents_dir = os.path.join(os.path.dirname(__file__), 'prompts')
        
        # Load Eunoia (formerly Daria) prompt
        eunoia_prompt_text = (
            "You are Eunoia, a research project manager. "
            "Help the user start a new research project. "
            "If the user mentions discovery planning, bring in Synthia."
        )
        
        # Load Synthia prompt
        with open(os.path.join(agents_dir, 'synthia.yml'), 'r') as f:
            synthia_yaml = yaml.safe_load(f)
            synthia_prompt_text = synthia_yaml["dynamic_prompt_prefix"]
        
        # Initialize conversation chains
        self.eunoia_prompt = ChatPromptTemplate.from_template(
            "{history}\nUser: {input}\nEunoia: " + eunoia_prompt_text
        )
        
        self.synthia_prompt = ChatPromptTemplate.from_template(
            "{history}\nUser: {input}\nSynthia: " + synthia_prompt_text
        )
        
        # Compose the chain: prompt -> LLM
        eunoia_chain = RunnableSequence(self.eunoia_prompt | self.llm)
        synthia_chain = RunnableSequence(self.synthia_prompt | self.llm)
        
        # Create runnables with message history
        self.eunoia_chain = RunnableWithMessageHistory(
            runnable=eunoia_chain,
            get_session_history=self.get_session_history,
            input_key="input",
            history_key="history"
        )
        
        self.synthia_chain = RunnableWithMessageHistory(
            runnable=synthia_chain,
            get_session_history=self.get_session_history,
            input_key="input",
            history_key="history"
        )
    
    def process_message(self, user_input, session_history=None):
        if session_history is None:
            session_history = ""
            
        # Convert session_history to a list of messages for the new API
        messages = []
        if session_history:
            for line in session_history.split("\n"):
                if line.startswith("User: "):
                    messages.append(HumanMessage(content=line[len("User: "):]))
                elif line.startswith("Eunoia: "):
                    messages.append(AIMessage(content=line[len("Eunoia: "):]))
                elif line.startswith("Synthia: "):
                    messages.append(AIMessage(content=line[len("Synthia: "):]))

        # Eunoia responds first
        eunoia_response = self.eunoia_chain.invoke({"input": user_input, "history": messages})
        messages.append(HumanMessage(content=user_input))
        messages.append(AIMessage(content=eunoia_response.content))
        
        # Check if we should bring in Synthia
        synthia_response = None
        if "discovery" in user_input.lower() or "discovery" in eunoia_response.content.lower():
            synthia_response = self.synthia_chain.invoke({"input": user_input, "history": messages})
            messages.append(AIMessage(content=synthia_response.content))

        # Convert messages back to session_history string
        new_history = ""
        for msg in messages:
            if isinstance(msg, HumanMessage):
                new_history += f"\nUser: {msg.content}"
            elif isinstance(msg, AIMessage):
                # Guess which agent based on content (simple heuristic)
                if synthia_response and msg.content == synthia_response.content:
                    new_history += f"\nSynthia: {msg.content}"
                else:
                    new_history += f"\nEunoia: {msg.content}"
        new_history = new_history.lstrip("\n")

        result = {
            'eunoia_response': eunoia_response.content,
            'session_history': new_history
        }
        if synthia_response:
            result['synthia_response'] = synthia_response.content
        return result

# Create a global orchestrator instance
orchestrator = AgentOrchestrator() 