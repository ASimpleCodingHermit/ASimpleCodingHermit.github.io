from flask import Flask, render_template

app = Flask(__name__)

posts = [
    {
        'author': 'Joseph Chu',
        'title': 'Blog Post Title',
        'content': 'Blog Post Content',
        'date_posted': 'Feburary 8, 2021'
    },
    {
        'author': 'Joshanne Chu',
        'title': 'Blog Post Title 2',
        'content': 'Blog Post Content 2',
        'date_posted': 'Feburary 14, 2021'
    }
]


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html', posts=posts)


@app.route('/about')
def about():
    return render_template('about.html', title='About')


if __name__ == '__main__':
    app.run(debug=True)
