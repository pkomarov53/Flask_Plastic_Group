from flask import Flask, render_template, request, g, redirect, url_for, flash
from flask_login import LoginManager, login_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)


# Рендер главной страницы
@app.route('/index')
@app.route('/')
def index():
    return render_template('index.html', title='ЮГ-Тара')


# Рендер страницы аутентификации пользователя
@app.route('/auth')
def user_auth():
    return render_template('user_login.html', title='Войти')


# Рендер страницы регистрации пользователя
@app.route('/register')
def user_register():
    return render_template('user_register.html')


# Рендер дэшборда (возможно админки)
@app.route('/dashboard')
def dashboard():
    return render_template('control_panel.html')


# Рендер страницы с калькулятором цены заказа
@app.route('/price-calculator')
def price_calc():
    return render_template('price_calculator.html')


if __name__ == '__main__':
    app.run(debug=True)
