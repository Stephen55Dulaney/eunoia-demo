from flask import Blueprint, jsonify, request, current_app
from flask_login import current_user, login_required
import os
import json
from dotenv import load_dotenv
import openai
from datetime import datetime
from functools import wraps
import uuid
import base64
from typing import Optional, Dict, Any

# Import our enhanced orchestrator
import sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from enhanced_orchestrator import enhanced_orchestrator

# Load environment variables
load_dotenv()

# Demo mode configuration
DEMO_MODE = os.getenv('DEMO_MODE', 'false').lower() == 'true'

# Configure OpenAI
openai.api_key = os.getenv('OPENAI_API_KEY')

enhanced_memory_companion_bp = Blueprint('enhanced_memory_companion', __name__)

MEMORY_FILE = os.path.join(os.path.dirname(__file__), 'enhanced_eunoia_memory.json')

def load_memory():
    if os.path.exists(MEMORY_FILE):
        with open(MEMORY_FILE, 'r') as f:
            return json.load(f)
    return {
        'name': 'Enhanced Eunoia Multi-Agent Research Platform',
        'current_sprint': 'Multi-Agent Integration',
        'timeline': [],
        'opportunities': [],
        'sessions': {},
        'agent_insights': {},
        'research_projects': []
    }

def save_memory(data):
    with open(MEMORY_FILE, 'w') as f:
        json.dump(data, f, indent=2)

def demo_or_require_permission(permission):
    """Decorator that allows access in demo mode or requires permission in production"""
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if DEMO_MODE:
                return f(*args, **kwargs)
            if not current_user.is_authenticated:
                return jsonify({'error': 'Authentication required'}), 401
            if not current_user.has_permission(permission):
                return jsonify({'error': 'Permission denied'}), 403
            return f(*args, **kwargs)
        return decorated_function
    return decorator

@enhanced_memory_companion_bp.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@enhanced_memory_companion_bp.route('/api/enhanced_memory_companion/test')
@demo_or_require_permission('view_projects')
def test():
    return jsonify({
        'status': 'ok',
        'message': 'Enhanced Memory Companion API is working',
        'version': '2.0.0',
        'demo_mode': DEMO_MODE,
        'available_agents': list(enhanced_orchestrator.agents.keys()),
        'features': ['multi_agent_orchestration', 'stt_tts_support', 'session_management', 'insight_extraction'],
        'user': {
            'id': current_user.id if current_user.is_authenticated else 'demo_user',
            'email': current_user.email if current_user.is_authenticated else 'demo@example.com',
            'name': current_user.get_full_name() if current_user.is_authenticated else 'Demo User'
        }
    })

@enhanced_memory_companion_bp.route('/api/enhanced_memory_companion/project_data')
@demo_or_require_permission('view_projects')
def get_project_data():
    memory = load_memory()
    return jsonify(memory)

@enhanced_memory_companion_bp.route('/api/enhanced_memory_companion/chat', methods=['POST', 'OPTIONS'])
@demo_or_require_permission('view_projects')
def enhanced_chat():
    if request.method == 'OPTIONS':
        return jsonify({}), 200
        
    data = request.get_json()
    message = data.get('message')
    session_id = data.get('session_id', str(uuid.uuid4()))
    audio_data = data.get('audio_data')  # Base64 encoded audio
    provider = data.get('provider', 'openai')
    model = data.get('model', 'gpt-4')
    
    if not message:
        return jsonify({'error': 'No message provided'}), 400
    
    # Load memory for context
    memory = load_memory()
    
    # Convert audio data if provided
    audio_bytes = None
    if audio_data:
        try:
            audio_bytes = base64.b64decode(audio_data)
        except Exception as e:
            current_app.logger.error(f"Error decoding audio data: {str(e)}")
    
    try:
        # Process with enhanced orchestrator
        result = enhanced_orchestrator.process_message(
            user_input=message,
            session_id=session_id,
            audio_data=audio_bytes
        )
        
        # Update memory with session data
        if session_id not in memory['sessions']:
            memory['sessions'][session_id] = {
                'created_at': datetime.utcnow().isoformat(),
                'messages': [],
                'agent_interactions': [],
                'insights': []
            }
        
        # Add message to session
        memory['sessions'][session_id]['messages'].append({
            'timestamp': datetime.utcnow().isoformat(),
            'user_message': message,
            'agent_response': result.get('response', ''),
            'agent_name': result.get('agent_name', 'Unknown'),
            'current_agent': result.get('current_agent', 'eunoia')
        })
        
        # Add agent interaction if handoff occurred
        if result.get('handoff_occurred'):
            memory['sessions'][session_id]['agent_interactions'].append({
                'timestamp': datetime.utcnow().isoformat(),
                'from_agent': result.get('session_context', {}).get('agent_history', [{}])[-1].get('from_agent', 'unknown'),
                'to_agent': result.get('current_agent', 'unknown'),
                'trigger': message[:100]
            })
        
        # Add insights if any
        if result.get('session_context', {}).get('insights_count', 0) > 0:
            session_summary = enhanced_orchestrator.get_session_summary(session_id)
            if session_summary.get('insights'):
                memory['sessions'][session_id]['insights'].extend(session_summary['insights'])
        
        # Save updated memory
        save_memory(memory)
        
        # Prepare response
        response_data = {
            'response': result.get('response', ''),
            'session_id': session_id,
            'current_agent': result.get('current_agent', 'eunoia'),
            'agent_name': result.get('agent_name', 'Eunoia'),
            'handoff_occurred': result.get('handoff_occurred', False),
            'available_agents': result.get('available_agents', []),
            'session_context': result.get('session_context', {}),
            'audio_response': result.get('audio_response')
        }
        
        return jsonify(response_data)
        
    except Exception as e:
        current_app.logger.error(f"Error in enhanced chat endpoint: {str(e)}")
        return jsonify({'error': str(e)}), 500

@enhanced_memory_companion_bp.route('/api/enhanced_memory_companion/session/<session_id>')
@demo_or_require_permission('view_projects')
def get_session_data(session_id):
    """Get detailed session data including agent interactions and insights"""
    try:
        session_summary = enhanced_orchestrator.get_session_summary(session_id)
        memory = load_memory()
        session_data = memory['sessions'].get(session_id, {})
        
        return jsonify({
            'session_id': session_id,
            'summary': session_summary,
            'detailed_data': session_data,
            'available_agents': list(enhanced_orchestrator.agents.keys())
        })
    except Exception as e:
        current_app.logger.error(f"Error getting session data: {str(e)}")
        return jsonify({'error': str(e)}), 500

@enhanced_memory_companion_bp.route('/api/enhanced_memory_companion/agents')
@demo_or_require_permission('view_projects')
def get_agents():
    """Get information about all available agents"""
    agents_info = {}
    for agent_id, agent_config in enhanced_orchestrator.agents.items():
        agents_info[agent_id] = {
            'name': agent_config.get('agent_name', agent_id.title()),
            'role': agent_config.get('role', ''),
            'description': agent_config.get('description', ''),
            'tone': agent_config.get('tone', ''),
            'core_objectives': agent_config.get('core_objectives', [])
        }
    
    return jsonify({
        'agents': agents_info,
        'total_agents': len(agents_info)
    })

@enhanced_memory_companion_bp.route('/api/enhanced_memory_companion/insights')
@demo_or_require_permission('view_projects')
def get_insights():
    """Get all insights from all sessions"""
    memory = load_memory()
    all_insights = []
    
    for session_id, session_data in memory['sessions'].items():
        if 'insights' in session_data:
            for insight in session_data['insights']:
                insight['session_id'] = session_id
                all_insights.append(insight)
    
    return jsonify({
        'insights': all_insights,
        'total_insights': len(all_insights)
    })

@enhanced_memory_companion_bp.route('/api/enhanced_memory_companion/research_context', methods=['POST'])
@demo_or_require_permission('view_projects')
def update_research_context():
    """Update research context for a session"""
    data = request.get_json()
    session_id = data.get('session_id')
    context = data.get('context', {})
    
    if not session_id:
        return jsonify({'error': 'Session ID required'}), 400
    
    try:
        enhanced_orchestrator.update_research_context(session_id, context)
        return jsonify({'status': 'success', 'message': 'Research context updated'})
    except Exception as e:
        current_app.logger.error(f"Error updating research context: {str(e)}")
        return jsonify({'error': str(e)}), 500

@enhanced_memory_companion_bp.route('/api/enhanced_memory_companion/timeline', methods=['POST'])
@demo_or_require_permission('view_projects')
def add_timeline_event():
    data = request.get_json()
    memory = load_memory()
    
    # Generate unique ID for the timeline event
    timeline_id = len(memory['timeline']) + 1
    
    event = {
        'id': timeline_id,
        'timestamp': datetime.utcnow().isoformat(),
        'type': data.get('type', 'note'),
        'content': data.get('content'),
        'details': data.get('details', {}),
        'user_id': current_user.id if current_user.is_authenticated else 'demo_user'
    }
    
    memory['timeline'].append(event)
    save_memory(memory)
    
    return jsonify({'status': 'success', 'event': event})

@enhanced_memory_companion_bp.route('/api/enhanced_memory_companion/opportunity', methods=['POST'])
@demo_or_require_permission('view_projects')
def add_opportunity():
    data = request.get_json()
    memory = load_memory()
    
    # Generate unique ID for the opportunity
    opportunity_id = len(memory['opportunities']) + 1
    
    opportunity = {
        'id': opportunity_id,
        'title': data.get('title'),
        'description': data.get('description'),
        'priority': data.get('priority', 'medium'),
        'status': data.get('status', 'open'),
        'created_at': datetime.utcnow().isoformat(),
        'user_id': current_user.id if current_user.is_authenticated else 'demo_user'
    }
    
    memory['opportunities'].append(opportunity)
    save_memory(memory)
    
    return jsonify({'status': 'success', 'opportunity': opportunity})

@enhanced_memory_companion_bp.route('/api/enhanced_memory_companion/sprint', methods=['PUT'])
@demo_or_require_permission('view_projects')
def add_sprint():
    data = request.get_json()
    memory = load_memory()
    
    memory['current_sprint'] = data.get('sprint', memory['current_sprint'])
    save_memory(memory)
    
    return jsonify({'status': 'success', 'current_sprint': memory['current_sprint']})
