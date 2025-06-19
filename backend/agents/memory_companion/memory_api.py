from flask import Blueprint, jsonify, request, current_app
from flask_login import current_user, login_required
import os
import json
from dotenv import load_dotenv
import openai
from datetime import datetime
from functools import wraps
# Add anthropic import
try:
    import anthropic
except ImportError:
    anthropic = None

# Load environment variables
load_dotenv()

# Demo mode configuration
DEMO_MODE = os.getenv('DEMO_MODE', 'false').lower() == 'true'

# Configure OpenAI
openai.api_key = os.getenv('OPENAI_API_KEY')

memory_companion_bp = Blueprint('memory_companion', __name__)

MEMORY_FILE = os.path.join(os.path.dirname(__file__), 'eunoia_memory.json')

def load_memory():
    if os.path.exists(MEMORY_FILE):
        with open(MEMORY_FILE, 'r') as f:
            return json.load(f)
    return {
        'name': 'Eunoia Interview Tool',
        'current_sprint': 'Initial Development',
        'timeline': [],
        'opportunities': []
    }

def save_memory(data):
    with open(MEMORY_FILE, 'w') as f:
        json.dump(data, f, indent=2)

def require_permission(permission):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if not current_user.is_authenticated:
                return jsonify({'error': 'Authentication required'}), 401
            if not current_user.has_permission(permission):
                return jsonify({'error': 'Permission denied'}), 403
            return f(*args, **kwargs)
        return decorated_function
    return decorator

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

@memory_companion_bp.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@memory_companion_bp.route('/api/memory_companion/test')
@demo_or_require_permission('view_projects')
def test():
    return jsonify({
        'status': 'ok',
        'message': 'Memory Companion API is working',
        'version': '1.0.0',
        'demo_mode': DEMO_MODE,
        'user': {
            'id': current_user.id if current_user.is_authenticated else 'demo_user',
            'email': current_user.email if current_user.is_authenticated else 'demo@example.com',
            'name': current_user.get_full_name() if current_user.is_authenticated else 'Demo User'
        }
    })

@memory_companion_bp.route('/api/memory_companion/project_data')
@demo_or_require_permission('view_projects')
def get_project_data():
    memory = load_memory()
    return jsonify(memory)

@memory_companion_bp.route('/api/memory_companion/chat', methods=['POST', 'OPTIONS'])
@demo_or_require_permission('view_projects')
def chat():
    if request.method == 'OPTIONS':
        return jsonify({}), 200
        
    data = request.get_json()
    message = data.get('message')
    provider = data.get('provider', 'openai')
    model = data.get('model', 'gpt-4')
    
    if not message:
        return jsonify({'error': 'No message provided'}), 400
    
    # Load memory for context
    memory = load_memory()
    
    # Prepare system message with memory context
    system_message = f"""You are Eunoia, an AI research assistant with a memory system. 
    Current project: {memory['name']}
    Current sprint: {memory['current_sprint']}
    
    Recent timeline events:
    {json.dumps(memory['timeline'][-5:], indent=2) if memory['timeline'] else 'No recent events'}
    
    Current opportunities:
    {json.dumps(memory['opportunities'], indent=2) if memory['opportunities'] else 'No current opportunities'}
    
    IMPORTANT: Timeline entries should only be created for significant milestones, not for every conversation. 
    Regular conversations are stored in the chat transcript. Only add timeline entries when the user explicitly 
    requests it or when there's a major project milestone, decision, or achievement.
    
    Use this context to provide relevant and informed responses."""
    
    try:
        if provider == 'openai':
            client = openai.OpenAI(api_key=os.getenv('OPENAI_API_KEY'))
            response = client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "system", "content": system_message},
                    {"role": "user", "content": message}
                ]
            )
            response_text = response.choices[0].message.content
        elif provider == 'anthropic':
            if anthropic is None:
                return jsonify({'error': 'Anthropic SDK not installed'}), 500
            client = anthropic.Anthropic(api_key=os.getenv('ANTHROPIC_API_KEY'))
            # Claude models use a system prompt, not a system message in the messages list
            response = client.messages.create(
                model=model,
                max_tokens=1024,
                system=system_message,
                messages=[
                    {"role": "user", "content": message}
                ]
            )
            # Claude 3 returns content as a list of blocks
            response_text = "".join([block.text for block in response.content if hasattr(block, 'text')])
        else:
            return jsonify({'error': 'Unsupported provider'}), 400
        
        # Don't automatically create timeline entries for every conversation
        # Timeline entries should only be created for significant milestones
        
        return jsonify({'response': response_text})
        
    except Exception as e:
        current_app.logger.error(f"Error in chat endpoint: {str(e)}")
        return jsonify({'error': str(e)}), 500

@memory_companion_bp.route('/api/memory_companion/timeline', methods=['POST'])
@demo_or_require_permission("view_projects")
@demo_or_require_permission('edit_projects')
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
        'user_id': current_user.id
    }
    
    memory['timeline'].append(event)
    save_memory(memory)
    
    return jsonify({'status': 'success', 'event': event})

@memory_companion_bp.route('/api/memory_companion/opportunity', methods=['POST'])
@demo_or_require_permission("view_projects")
@demo_or_require_permission('edit_projects')
def add_opportunity():
    data = request.get_json()
    memory = load_memory()
    
    opportunity = {
        'id': len(memory['opportunities']) + 1,
        'title': data.get('title'),
        'description': data.get('description'),
        'priority': data.get('priority', 'medium'),
        'status': data.get('status', 'new'),
        'created_at': datetime.utcnow().isoformat(),
        'created_by': current_user.id
    }
    
    memory['opportunities'].append(opportunity)
    save_memory(memory)
    
    return jsonify({'status': 'success', 'opportunity': opportunity})

@memory_companion_bp.route('/api/memory_companion/sprint', methods=['PUT'])
@demo_or_require_permission("view_projects")
@demo_or_require_permission('edit_projects')
def update_sprint():
    data = request.get_json()
    memory = load_memory()
    
    memory['current_sprint'] = data.get('sprint', memory['current_sprint'])
    save_memory(memory)
    
    return jsonify({'status': 'success', 'sprint': memory['current_sprint']})

@memory_companion_bp.route('/api/memory_companion/timeline/<int:event_id>', methods=['PUT'])
@demo_or_require_permission("view_projects")
@demo_or_require_permission('edit_projects')
def update_timeline_event(event_id):
    data = request.get_json()
    memory = load_memory()
    
    # Find the event by ID
    event = None
    for timeline_event in memory['timeline']:
        if timeline_event.get('id') == event_id:
            event = timeline_event
            break
    
    if not event:
        return jsonify({'error': 'Timeline event not found'}), 404
    
    # Update fields if provided
    if 'content' in data:
        event['content'] = data['content']
    if 'type' in data:
        event['type'] = data['type']
    if 'details' in data:
        event['details'] = data['details']
    
    # Add update timestamp
    event['updated_at'] = datetime.utcnow().isoformat()
    event['updated_by'] = current_user.id
    
    save_memory(memory)
    
    return jsonify({'status': 'success', 'event': event})

@memory_companion_bp.route('/api/memory_companion/timeline/<int:event_id>', methods=['DELETE'])
@demo_or_require_permission("view_projects")
@demo_or_require_permission('edit_projects')
def delete_timeline_event(event_id):
    memory = load_memory()
    
    # Find the event by ID
    event = None
    event_index = None
    for i, timeline_event in enumerate(memory['timeline']):
        if timeline_event.get('id') == event_id:
            event = timeline_event
            event_index = i
            break
    
    if not event:
        return jsonify({'error': 'Timeline event not found'}), 404
    
    # Remove the event
    memory['timeline'].pop(event_index)
    save_memory(memory)
    
    return jsonify({'status': 'success', 'message': f'Timeline event {event_id} deleted'})

@memory_companion_bp.route('/api/memory_companion/timeline/cleanup', methods=['POST'])
@demo_or_require_permission("view_projects")
@demo_or_require_permission('edit_projects')
def cleanup_timeline():
    memory = load_memory()
    
    # Remove entries with undefined content or missing IDs
    original_count = len(memory['timeline'])
    memory['timeline'] = [
        event for event in memory['timeline'] 
        if event.get('content') and event.get('content') != 'undefined' and event.get('id')
    ]
    
    # Reassign IDs to ensure they're sequential
    for i, event in enumerate(memory['timeline']):
        event['id'] = i + 1
    
    removed_count = original_count - len(memory['timeline'])
    save_memory(memory)
    
    return jsonify({
        'status': 'success', 
        'message': f'Cleaned up {removed_count} undefined timeline entries',
        'remaining_entries': len(memory['timeline'])
    })

@memory_companion_bp.route('/api/memory_companion/opportunity/<int:opportunity_id>', methods=['PUT'])
@demo_or_require_permission("view_projects")
@demo_or_require_permission('edit_projects')
def update_opportunity(opportunity_id):
    data = request.get_json()
    memory = load_memory()
    
    # Find the opportunity by ID
    opportunity = None
    for opp in memory['opportunities']:
        if opp['id'] == opportunity_id:
            opportunity = opp
            break
    
    if not opportunity:
        return jsonify({'error': 'Opportunity not found'}), 404
    
    # Update fields if provided
    if 'title' in data:
        opportunity['title'] = data['title']
    if 'description' in data:
        opportunity['description'] = data['description']
    if 'priority' in data:
        opportunity['priority'] = data['priority']
    if 'status' in data:
        opportunity['status'] = data['status']
    
    # Add update timestamp
    opportunity['updated_at'] = datetime.utcnow().isoformat()
    opportunity['updated_by'] = current_user.id
    
    save_memory(memory)
    
    return jsonify({'status': 'success', 'opportunity': opportunity}) 