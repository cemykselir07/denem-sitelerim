from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    # Mesajı işleme veya veritabanına kaydetme kodu buraya gelecek
    return f'Ad: {name}, E-posta: {email}, Mesaj: {message}'

if __name__ == '__main__':
    app.run(debug=True)
