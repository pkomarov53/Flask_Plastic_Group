from flask import Flask, render_template, request, g, redirect, url_for, flash
from flask_login import LoginManager, login_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html', title='ЮГ-Тара')


if __name__ == '__main__':
    app.run(debug=True)