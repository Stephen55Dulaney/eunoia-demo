from flask import Flask, send_from_directory, render_template_string
import os

app = Flask(__name__)

# Serve static files
@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

# Serve Cover Oregon prototype as root
@app.route('/')
def cover_oregon_home():
    return send_from_directory('static/cover_oregon_prototype/html', 'index.html')

# Serve Cover Oregon prototype files
@app.route('/cover-oregon-prototype/<path:filename>')
def cover_oregon_files(filename):
    return send_from_directory('static/cover_oregon_prototype', filename)

# Simple health check
@app.route('/health')
def health():
    return {'status': 'ok', 'message': 'Flask server is running'}

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5050) 