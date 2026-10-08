from functools import wraps

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash

app = Flask(__name__)

# Configure session
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure database
db = SQL("sqlite:///db_handling/website.sqlite3")


# Create database tables if they do not already exist
db.execute("""
    CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL
    )
""")

db.execute("""
    CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT,
        content TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
""")


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):

        if session.get("admin_id") is None:
            return redirect("/admin/login")

        return f(*args, **kwargs)

    return decorated_function


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/about")
@app.route("/about.html")
def about():
    return render_template("about.html")


@app.route("/career")
@app.route("/career.html")
def career():
    return render_template("career.html")


@app.route("/projects")
@app.route("/projects.html")
def projects():
    return render_template("projects.html")


@app.route("/contactme", methods=["GET", "POST"])
@app.route("/contactme.html", methods=["GET", "POST"])
def contactme():

    if request.method == "POST":

        name = request.form.get("name")
        email = request.form.get("email")
        content = request.form.get("content")

        if not name or not content:
            flash("Please enter your name and a message.")
            return redirect("/contactme")

        db.execute(
            "INSERT INTO submissions (name, email, content) VALUES (?, ?, ?)", name, email, content
        )

        flash("Thank you! Your message has been submitted and I will do my best to respond ASAP.")

        return redirect("/contactme")

    return render_template("contactme.html")


@app.route("/admin/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        username = request.form.get("username")
        password = request.form.get("password")

        if not username or not password:
            flash("Please enter a username and password.")
            return redirect("/admin/login")

        rows = db.execute(
            "SELECT * FROM admins WHERE username = ?", username
        )

        if len(rows) != 1 or not check_password_hash(
            rows[0]["password_hash"],
            password
        ):
            flash("Incorrect username or password.")
            return redirect("/admin/login")

        # clear any old sessions to make space for new one
        session.clear()
        session["admin_id"] = rows[0]["id"]

        return redirect("/admin/submissions")

    return render_template("login.html")


@app.route("/admin/logout", methods=["POST"])
def logout():

    session.clear()
    return redirect("/")


@app.route("/admin/submissions")
@login_required
def submissions():

    submissions = db.execute(
        "SELECT * FROM submissions ORDER BY created_at DESC"
    )

    return render_template("submissions.html", submissions=submissions)


@app.route("/admin/submissions/<int:submission_id>/delete", methods=["POST"])
@login_required
def delete_submission(submission_id):

    db.execute(
        "DELETE FROM submissions WHERE id = ?", submission_id
    )

    flash("Submission deleted.")

    return redirect("/admin/submissions")
