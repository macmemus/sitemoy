from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import re

app = Flask(__name__)
CORS(app, resources={r"/analyze": {"origins": "*"}}, supports_credentials=True, allow_headers=["Content-Type"])

@app.route('/analyze', methods=['POST'])
def analyze_text():
    data = request.json
    text = data.get('text', '')

    try:
        print(f"Received text: {text}")
        result = subprocess.run(
            ['ollama', 'run', 'llama3', text],
            capture_output=True,
            text=True
        )

        print(f"Command stdout: {result.stdout}")
        print(f"Command stderr: {result.stderr}")
        print(f"Command return code: {result.returncode}")

        if result.returncode == 0:
            # Удаление нежелательных строк из stdout
            filtered_output = re.sub(r'failed to get console mode for (stdout|stderr): The handle is invalid.\n', '', result.stdout).strip()
            return jsonify({'response': filtered_output})
        else:
            return jsonify({'error': 'Ошибка при анализе текста', 'details': result.stderr}), 500
    except Exception as e:
        print(f"Exception: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)