# server.py
from flask import Flask, render_template, request
from flask_restful import Resource, Api
import random
import pycodestyle

app = Flask(__name__, static_folder="static/dist", template_folder="static")
api = Api(app)

class pyCode(Resource):
    def get(self, textfile):
        return {'data': pycodestyle(textfile)}

api.add_resource(pyCode, '/pycodestyle/<textfile>')

def get_hello():
    greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Hej']
    return random.choice(greeting_list)

def make_file(text):
    file = open('codefile.py', 'w')
    file.write(text)
    file.close()

def check_file():
    file = open('checkfile.txt', 'r')
    str = file.read()
    file.close()
    return str

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return get_hello()

@app.route("/send", methods=['POST'])
def send():
    print(request.args)
    print(request.data)
    print(request.values)
    print(request.get_data(as_text=True))
    print(dict(request.form))
    print(request.data)
    # print(request.get_json(force=True))
    print('try this: ', request.form)
    d = dict(request.form)
    for key in dict(request.form).keys():
        print(key)
        print(dict(request.form)[key][0])
        if (dict(request.form)[key][0] != ''):
            ret1 = (key + '=')
        else:
            ret1 = key
        ret2 = dict(request.form)[key][0]
        make_file(ret1 + ret2)
        fchecker = pycodestyle.Checker('codefile.py', show_source=True)
        file_errors = fchecker.check_all()
        res = check_file()
        # print(fchecker.report)
        return ("Found %s suggestions" % file_errors + "\n\n" + res)
        # print(pycodestyle)
        # return key

if __name__ == "__main__":
    app.run()
