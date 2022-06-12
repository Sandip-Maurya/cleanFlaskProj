from flask import Flask, render_template, request, url_for
from flask_cors import CORS
import json 
from Python_Scripts.cleaner import *

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/cleaned', methods=['POST'])
def cleaned():
    src_code_input = request.form['src_code']
    src_code_output = clean_function(src_code_input)
    global output
    output = {'src_code_input': src_code_input, 'src_code_output': src_code_output}
    return render_template('clean.html', src_codes = output)


@app.route('/getiodata')
def getiodata():
    return json.dumps(output)


if __name__=='__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)