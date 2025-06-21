import yaml
import os
import json
from typing import Dict, List, Optional, Any
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.runnables import RunnableSequence
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from datetime import datetime
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class EnhancedAgentOrchestrator:
    def __init__(self):
        self.llm = ChatOpenAI(temperature=0.2)
        self.agents = {}
        self.agent_chains = {}
        self.session_data = {}
        self.load_all_agents()
        
    def get_session_history(self, session_id, *args, **kwargs):
        """Get session history for a specific session"""
        if session_id not in self.session_data:
            self.session_data[session_id] = {
                'messages': [],
                'current_agent': 'eunoia',
                'agent_history': [],
                'research_context': {},
                'insights': []
            }
        return self.session_data[session_id]['messages']

    def load_all_agents(self):
        """Load all agent prompts from YAML files"""
        agents_dir = os.path.join(os.path.dirname(__file__), 'prompts')
        
        # Define agent loading order and dependencies
        agent_configs = {
            'askia': 'askia.yml',
            'daria': 'daria.yml', 
            'thesea': 'thesea.yml',
            'odessia': 'odessia.yml',
            'eurekia': 'eurekia.yml',
            'synthia': 'synthia.yml'
        }
        
        for agent_name, yaml_file in agent_configs.items():
            try:
                yaml_path = os.path.join(agents_dir, yaml_file)
                if os.path.exists(yaml_path):
                    with open(yaml_path, 'r') as f:
                        agent_config = yaml.safe_load(f)
                        self.agents[agent_name] = agent_config
                        
                        # Create prompt template
                        prompt_text = agent_config.get('dynamic_prompt_prefix', '')
                        prompt = ChatPromptTemplate.from_template(
                            "{history}\nUser: {input}\n" + agent_config['agent_name'] + ": " + prompt_text
                        )
                        
                        # Create chain
                        chain = RunnableSequence(prompt | self.llm)
                        
                        # Create runnable with message history
                        self.agent_chains[agent_name] = RunnableWithMessageHistory(
                            runnable=chain,
                            get_session_history=self.get_session_history,
                            input_key="input",
                            history_key="history"
                        )
                        
                        logger.info(f"Loaded agent: {agent_name}")
                else:
                    logger.warning(f"Agent YAML file not found: {yaml_file}")
                    
            except Exception as e:
                logger.error(f"Error loading agent {agent_name}: {str(e)}")

    def determine_agent_handoff(self, user_input: str, session_id: str) -> str:
        """Determine which agent should handle the current input"""
        session = self.session_data.get(session_id, {})
        current_agent = session.get('current_agent', 'eunoia')
        
        # Define handoff triggers
        handoff_triggers = {
            'askia': ['research question', 'study design', 'methodology', 'hypothesis'],
            'daria': ['interview', 'user interview', 'participant', 'moderate', 'conduct'],
            'thesea': ['synthesize', 'analyze', 'pattern', 'insight', 'hypothesis'],
            'odessia': ['journey', 'experience', 'touchpoint', 'mapping', 'flow'],
            'eurekia': ['insight', 'breakthrough', 'pattern', 'opportunity', 'trend'],
            'synthia': ['discovery', 'planning', 'discovery plan', '8-week']
        }
        
        # Check for explicit agent requests
        user_input_lower = user_input.lower()
        for agent, triggers in handoff_triggers.items():
            if any(trigger in user_input_lower for trigger in triggers):
                return agent
                
        # Check for context-based handoffs
        if 'interview' in user_input_lower and current_agent != 'daria':
            return 'daria'
        elif 'journey' in user_input_lower and current_agent != 'odessia':
            return 'odessia'
        elif 'insight' in user_input_lower and current_agent != 'eurekia':
            return 'eurekia'
            
        # Default to current agent
        return current_agent

    def process_message(self, user_input: str, session_id: str, audio_data: Optional[bytes] = None) -> Dict[str, Any]:
        """Process a message with multi-agent orchestration"""
        
        # Initialize session if needed
        if session_id not in self.session_data:
            self.session_data[session_id] = {
                'messages': [],
                'current_agent': 'eunoia',
                'agent_history': [],
                'research_context': {},
                'insights': []
            }
        
        session = self.session_data[session_id]
        
        # Determine which agent should handle this
        target_agent = self.determine_agent_handoff(user_input, session_id)
        
        # Check if we need to handoff to a different agent
        if target_agent != session['current_agent']:
            # Record handoff
            session['agent_history'].append({
                'timestamp': datetime.utcnow().isoformat(),
                'from_agent': session['current_agent'],
                'to_agent': target_agent,
                'trigger': user_input[:100]  # First 100 chars as trigger
            })
            session['current_agent'] = target_agent
            
        # Get the appropriate agent chain
        agent_chain = self.agent_chains.get(target_agent)
        if not agent_chain:
            return {
                'error': f'Agent {target_agent} not found',
                'current_agent': session['current_agent']
            }
        
        try:
            # Process with the selected agent
            response = agent_chain.invoke({
                "input": user_input, 
                "history": session['messages'],
                "config": {"configurable": {"session_id": session_id}}
            })
            
            # Update session
            session['messages'].append(HumanMessage(content=user_input))
            session['messages'].append(AIMessage(content=response.content))
            
            # Extract insights if this is an insight-focused agent
            if target_agent in ['thesea', 'eurekia']:
                insight = self.extract_insight(response.content, target_agent)
                if insight:
                    session['insights'].append(insight)
            
            # Prepare response
            result = {
                'response': response.content,
                'current_agent': target_agent,
                'agent_name': self.agents[target_agent]['agent_name'],
                'session_id': session_id,
                'handoff_occurred': len(session['agent_history']) > 0 and session['agent_history'][-1]['to_agent'] == target_agent,
                'available_agents': list(self.agents.keys()),
                'session_context': {
                    'research_context': session['research_context'],
                    'insights_count': len(session['insights']),
                    'agent_history': session['agent_history']
                }
            }
            
            # Add TTS response if audio was provided
            if audio_data:
                result['audio_response'] = self.generate_tts_response(response.content)
            
            return result
            
        except Exception as e:
            logger.error(f"Error processing message with agent {target_agent}: {str(e)}")
            return {
                'error': f'Error processing message: {str(e)}',
                'current_agent': target_agent
            }

    def extract_insight(self, response: str, agent: str) -> Optional[Dict[str, Any]]:
        """Extract structured insights from agent responses"""
        try:
            insight = {
                'timestamp': datetime.utcnow().isoformat(),
                'agent': agent,
                'content': response,
                'type': 'insight',
                'tags': []
            }
            
            # Add agent-specific tags
            if agent == 'thesea':
                insight['tags'].extend(['synthesis', 'hypothesis', 'pattern'])
            elif agent == 'eurekia':
                insight['tags'].extend(['breakthrough', 'opportunity', 'trend'])
                
            return insight
        except Exception as e:
            logger.error(f"Error extracting insight: {str(e)}")
            return None

    def generate_tts_response(self, text: str) -> Dict[str, Any]:
        """Generate TTS response (placeholder for actual TTS integration)"""
        # This would integrate with a TTS service like OpenAI's TTS API
        return {
            'text': text,
            'audio_url': None,  # Would be generated by TTS service
            'duration': len(text.split()) * 0.5  # Rough estimate
        }

    def get_session_summary(self, session_id: str) -> Dict[str, Any]:
        """Get a summary of the session including insights and agent interactions"""
        if session_id not in self.session_data:
            return {'error': 'Session not found'}
            
        session = self.session_data[session_id]
        
        return {
            'session_id': session_id,
            'current_agent': session['current_agent'],
            'message_count': len(session['messages']),
            'agent_interactions': session['agent_history'],
            'insights': session['insights'],
            'research_context': session['research_context']
        }

    def update_research_context(self, session_id: str, context: Dict[str, Any]):
        """Update the research context for a session"""
        if session_id not in self.session_data:
            self.session_data[session_id] = {
                'messages': [],
                'current_agent': 'eunoia',
                'agent_history': [],
                'research_context': {},
                'insights': []
            }
            
        self.session_data[session_id]['research_context'].update(context)

# Create a global enhanced orchestrator instance
enhanced_orchestrator = EnhancedAgentOrchestrator()
