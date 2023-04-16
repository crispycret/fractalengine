from flask import Blueprint

from flask_cors import CORS

api = Blueprint('mandelbrot', __name__)

CORS(api)

from . import views