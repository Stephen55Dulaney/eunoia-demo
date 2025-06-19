from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, 
            static_folder='../static',
            template_folder='../templates')

# Configuration
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-key-please-change')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/cover-oregon')
def cover_oregon():
    return render_template('case_studies/cover_oregon.html')

@app.route('/ai-agents')
def ai_agents():
    return render_template('case_studies/ai_agents.html')

@app.route('/research')
def research():
    return render_template('case_studies/research.html')

@app.route('/cover-oregon-prototype/')
@app.route('/cover-oregon-prototype/<path:filename>')
def cover_oregon_prototype(filename='index.html'):
    return send_from_directory('../static/cover_oregon_prototype/html', filename)

if __name__ == '__main__':
    app.run(debug=True, port=5000) 