from flask import Flask, render_template, request, redirect, url_for, flash
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'uefksjkzxx_snbws-s234sad'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ug_tara.db'  # Путь к файлу базы данных
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Конфигурация Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'user_auth'


# Модель пользователя
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password_hash = db.Column(db.String(100), nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    @staticmethod
    def is_active():
        return True

    def get_id(self):
        return str(self.id)

    @staticmethod
    def is_authenticated():
        return True


class Purchase(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    product_name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    order_date = db.Column(db.Date)


# Дополнительная информация о пользователе
class User_Information(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(15))
    phone = db.Column(db.Text(30))
    address = db.Column(db.String(45))


@login_manager.user_loader
def load_user(user_id):
    return db.session.get(User, int(user_id))


# Рендер главной страницы
@app.route('/index')
@app.route('/')
def index():
    return render_template('index.html', title='ЮГ-Тара')


# Рендер страницы аутентификации пользователя
@app.route('/sign-in', methods=['GET', 'POST'])
def user_auth():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and user.check_password(password):
            login_user(user)
            flash('Успешный вход!', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Неверное имя пользователя или пароль', 'error')
    return render_template('user_login.html', title='Войти')


# Рендер страницы регистрации пользователя
@app.route('/register', methods=['GET', 'POST'])
def user_register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            flash('Пользователь с таким именем уже существует', 'error')
        else:
            new_user = User(username=username)
            new_user.set_password(password)
            db.session.add(new_user)
            db.session.commit()
            flash('Успешная регистрация! Теперь вы можете войти.', 'success')
            return redirect(url_for('user_auth'))
    return render_template('user_register.html')


# Рендер дэшборда
@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    user_info = User_Information.query.filter_by(user_id=current_user.id).first()
    user_orders = Purchase.query.filter_by(user_id=current_user.id).all()
    if request.method == 'POST':
        name = request.form['name']
        address = request.form['address']
        phone = request.form['phone']
        if user_info:
            user_info.name = name
            user_info.address = address
            user_info.phone = phone
        else:
            user_info = User_Information(user_id=current_user.id, name=name, address=address, phone=phone)
            db.session.add(user_info)
        db.session.commit()
        flash('Информация успешно сохранена', 'success')
        return redirect(url_for('dashboard'))
    return render_template('user_panel.html', user_info=user_info, user_orders=user_orders, title='Личный кабинет')


# Рендер страницы с калькулятором цены заказа
@app.route('/price-calculator')
def price_calc():
    return render_template('price_calculator.html')


# Выход пользователя
@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Вы успешно вышли', 'success')
    return redirect(url_for('index'))


if __name__ == '__main__':
    try:
        with app.app_context():
            db.create_all()
        print("Database tables created successfully.")
    except Exception as e:
        print("An error occurred while creating database tables:", e)
    app.run(debug=False)
