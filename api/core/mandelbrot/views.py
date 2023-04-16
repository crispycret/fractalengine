
from flask import request
from core.mandelbrot import api



# @api.route('/mandelbrot')
# def generate(width, height, iters, zoom, bounds, camx, camy):
#     """
#     Generates two sets of entries in JSON format.
#     Set1: The set of canvas coordinates with the iteration required to prove as valid mandelbrot number (Number is not included).
#     Set2: The set of canvas coordinates that result in NOT being a mandelbrot number.
#     Neither set actually includes the mandelbrot number as that is not particularly important.
#     Set 1 will be labeled as in, Set 2 will be labeled as out.
#     Each entry to these sets will have a counter of the entries to that set as the entry's key.
#     """    
#     def isInMandelbrotSet(x, y, iters, bounds):
#         real = x
#         imaginary = y
#         for iteration in range(iters):
#             temp_real = real * real - imaginary * imaginary + x
#             temp_imaginary = 2 * real * imaginary + y

#             real = temp_real
#             imaginary = temp_imaginary

#             if (abs(real * imaginary) > bounds):
#                 return [real, imaginary, iteration]
#         return None

#     set = [[],[]]
#     max_iteration_reached = 0


#     for x in range(width):
#         for y in range(height):
#             mag_x = x / zoom - camx
#             mag_y = y / zoom - camy

#             # returns [real, imaginary, iteration] for the given parameters
#             result = isInMandelbrotSet(mag_x, mag_y, iters, bounds)

#             # The current magnified x and y positions is not a mandelbrot number
#             if (result == None):
#                 set[1].append([x, y, 0])
#                 continue

#             # result -> [real, imaginary, iteration]
#             iteration = result[2]
            
#             # The current magnified x and y positions is not a mandelbrot number
#             set[0].append([x, y, iteration])

#             if (max_iteration_reached < iteration):
#                 max_iteration_reached = iteration
#             continue

#         continue

#     return [set, max_iteration_reached]






@api.route('/mandelbrot', methods=['POST'])
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




# @api.route('/generate', methos=['GET'])
# def generate():
#     '''
#     Generate a 2D list of mandelbrot set numbers that is meant to be drawn on a canvas.
#     Each list contains a set of mandelbrot numbers to draw on width, 
#     each list represents one row of numbers to draw on a canvas.
#     '''
#     def iterate_equation(cr, ci, steps, bounds):
#         '''
#         cr -> starting real value
#         ci -> starting imaginary value
#         steps -> number of iterations to verify if value is in set
#         bounds -> the escape radius of the mandelbrot
#         '''
#         zr = 0
#         zi = 0
#         tr = 0
#         ti = 0
#         n = 0

#         # iterate the equation for the number of steps until value falls outside the escape radius
#         for i in range(steps):
            
#             if (tr * ti > bounds):
#                 return 

#             zi = 2 * zr * zi + ci
#             zr = tr - ti + cr
#             tr = zr * zr
#             ti = zi * zi
#             n += 1 # increase count of steps taken
        
#         # Reduce error term by increasing number of iterations
#         for i in range(steps):
#             zi = 2 * zr * zi + ci
#             zr = tr - ti + cr
#             tr = zr * zr
#             ti = zi * zi

#         return [n, tr, ti]
    

#     defaultLookAt = [0.6, 0]
#     defaultZoom = [0, 0]

#     width = request.args.get('width')
#     height = request.args.get('height')
#     maxIter = request.args.get('maxIter')
#     lookAt = request.args.get('lookAt') or defaultLookAt
#     zoom = request.args.get('zoom') or defaultZoom
    
#     xRange = [lookAt[0]-zoom[0]/2, lookAt[0]+zoom[0]/2]
#     yRange = [lookAt[1]-zoom[1]/2, lookAt[1]+zoom[1]/2]
    
#     return []