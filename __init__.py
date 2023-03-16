from flask import Flask, render_template, Blueprint, redirect, url_for, request, flash, session

class WordClock():

    def __init__(self,host,port):
        self.app = Flask(__name__)
        self.app.config["SECRET_KEY"]="secret-key-goes-here"

        @self.app.route("/")
        def index():
            return render_template("index.html")

        self.app.run(host=host,port=port)

if __name__ == "__main__": WordClock("localhost",1090)
