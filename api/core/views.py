from flask import jsonify
from flask import request
from flask_cors import cross_origin

from core import app

from .utils import response



@app.route('/')
def index():
    args = ['arg1', 'arg2', 'arg3']
    kwargs = {'kwarg1':1, 'kwarg2':2, 'kwarg3':3}
    return response(*args, **kwargs)
    # return response('arg1', 'arg2', kwarg1=1)




@app.route('/generate', methods=['POST'])
@cross_origin()
def generate():
# def generate(display, lookAt, zoom, maxIter, bounds):
    """
    Generates two sets of entries in JSON format.
    Set1: The set of canvas coordinates with the iteration required to prove as valid mandelbrot number (Number is not included).
    Set2: The set of canvas coordinates that result in NOT being a mandelbrot number.
    Neither set actually includes the mandelbrot number as that is not particularly important.
    Set 1 will be labeled as in, Set 2 will be labeled as out.
    Each entry to these sets will have a counter of the entries to that set as the entry's key.
    
    [NEW]
    display -> Size of the canvas [width, height]
    lookAt -> location of the center
    zoom -> zoom factor
    maxIter -> maximum number of iterations
    bounds -> escape radius of the calculation.
    """    
    def isInMandelbrotSet(cr, ci):
        r, i = 0, 0

        for n in range(maxIter):
            # is the calculation here wrong?
            tr = r * r - i * i + cr
            ti = 2 * r * i + ci
            
            r = tr
            i = ti

            # Do the calculation while the value is inside the escape radius.
            if (abs(r * i) > bounds):
                return [r, i, n]
        return None

    json = request.get_json()
    
    display = json['display']    
    lookAt = json['lookAt']    
    zoom = json['zoom']    
    maxIter = json['maxIter']    
    bounds = json['bounds']    
    
    # each list is a row
    # each column is a mandelbrot number for the corresponding 
    set = []

    for y in range(display[1]):
        row = []
        for x in range(display[0]):
            cr = x / zoom - lookAt[0]
            ci = y / zoom - lookAt[1]

            # returns [real, imaginary, iteration] for the given parameters
            row.append(isInMandelbrotSet(cr, ci))
        set.append(row)
    return set


