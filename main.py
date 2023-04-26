from flask import Flask, jsonify, render_template, request, redirect, session, url_for
import mysql.connector
import os

app = Flask(__name__)

conn = mysql.connector.connect(
    host="localhost", user="root", password="", database="loan_db")
cursor = conn.cursor()

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)