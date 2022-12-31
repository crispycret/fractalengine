import { checkPrimeSync } from "crypto"
import { url } from "inspector"
import { useState } from "react"




export const Mandlebrot = () => {

    let MAX_ITERATION = 80
    let REAL_SET = { start: -2, end: 1 }
    let IMAGINARY_SET = { start: -1, end: 1 }
    let colors = new Array(16).fill(0).map((_, i) => i === 0 ? '#000' : `#${((1 << 24) * Math.random() | 0).toString(16)}`)

    const setSettings = (settings: any) => {
        MAX_ITERATION = settings.MAX_ITERATION
        REAL_SET = settings.REAL_SET
        IMAGINARY_SET = settings.IMAGINARY_SET
    }



    // let [MAX_ITERATION, setMAX_ITERATION] = useState(80)
    // let [REAL_SET, setREAL_SET] = useState({ start: -2, end: 1 })
    // let [IMAGINARY_SET, setIMAGINARY_SET] = useState({ start: -1, end: 1 })
    // let colors = new Array(16).fill(0).map((_, i) => i === 0 ? '#000' : `#${((1 << 24) * Math.random() | 0).toString(16)}`)

    // const setSettings = (settings: any) => {
    //     setMAX_ITERATION(settings.MAX_ITERATION)
    //     setREAL_SET(settings.REAL_SET)
    //     setIMAGINARY_SET(settings.IMAGINARY_SET)
    // }


    function mandelbrot(c: any) {
        let z = { x: 0, y: 0 }, n = 0, p, d;
        do {
            p = {
                x: Math.pow(z.x, 2) - Math.pow(z.y, 2),
                y: 2 * z.x * z.y
            }
            z = {
                x: p.x + c.x,
                y: p.y + c.y
            }
            d = Math.sqrt(Math.pow(z.x, 2) + Math.pow(z.y, 2))
            n += 1
        } while (d <= 2 && n < MAX_ITERATION)
        return [n, d <= 2]  
    }



    
    function draw(canvas: HTMLCanvasElement) {
            
        if (!canvas) return
        var ctx = canvas.getContext('2d')

        if (!ctx) return

        const WIDTH = window.innerWidth
        const HEIGHT = window.innerHeight
        ctx.canvas.width = WIDTH
        ctx.canvas.height = HEIGHT

        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                let complex = {
                    x: REAL_SET.start + (i / WIDTH) * (REAL_SET.end - REAL_SET.start),
                    y: IMAGINARY_SET.start + (j / HEIGHT) * (IMAGINARY_SET.end - IMAGINARY_SET.start)
                }

                const [m, isMandelbrotSet] = mandelbrot(complex)
                ctx.fillStyle = colors[isMandelbrotSet ? 0 : ((m as number) % colors.length - 1) + 1]
                ctx.fillRect(i, j, 1, 1)
            }
        }
    }





    
    function callWorker(canvas: HTMLCanvasElement, settings?: any) {
        var ctx = canvas?.getContext("2d");
        if (!ctx) return

        if (settings) setSettings(settings)

        // Draw the mandelbrot on the given canvas utilizing the clients threads. 
        const maxThreads:number = 12;

        // draw the mandelbrot over the entire window size.
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;
        ctx.canvas.width = WIDTH
        ctx.canvas.height = HEIGHT


        // Create a worker using the worker script
        let url = new URL('./workers/mandelbrot.worker.js', import.meta.url)
        var worker = new Worker(url);


        // Message to send the mandelbrot worker
        // it contains all the information required for the worker to compute a line
        function createMessage(screenX:number) {
            return JSON.stringify({
                screenX, 
                WIDTH, HEIGHT,
                MAX_ITERATION,
                REAL_SET, IMAGINARY_SET
            })
        }


        // Send a message to the worker on each thread to work a portion of the canvas
        // Send 8 initial work signals that target the first 8 columns on the x axis
        for(let thread=0; thread <= maxThreads; thread++) {
            worker.postMessage(createMessage(thread)) ;
        }


        // For each message sent, process the response
        // Each response contains a list of mandelbrot numbers for a range of y values for a single x value.
        // Each response is a column of mandelbrot numbers to be drawn on a canvas.
        worker.onmessage = function(e) {
            if (!ctx) return
          
            // Collect a the x value on the canvas to draw the list of y values
            let data = JSON.parse(e.data)

            let x = parseInt(data.screenX)

            // Draw a vertical piece of the mandlebrot
            // Loop through the results that is representing a list of mandelbrot 
            // results for all y coordinates of the canvas for a given x coordinate.
            for(let y = 0 ; y < HEIGHT ; y++) {

                // The interation value took to determine if is a mandlebrot number
                let iteration = data.points[y]
                // console.log(iteration)
                // Determing coloring based on iteration values here.
                // Could also incorporate other values 
                let fillStyle = `rgb(${(iteration/MAX_ITERATION)*255+30},${(iteration/MAX_ITERATION)*20+5},${(iteration/MAX_ITERATION)*20+5})`
                
                // If the iteration resulted in the maximum iteration, asumme not in set.
                if (iteration == MAX_ITERATION) { 
                    fillStyle = 'rgb(0,0,0)'
                }

                ctx.fillStyle = fillStyle;
                ctx.fillRect(x, y, 1, 1);
            }
            
            // This line will allow each thread to calculate a unique line.
            x = x + maxThreads;
            
            // Exit condition. The entire canvas has been processed from the point of view of this thread.
            if (x < WIDTH) {
                worker.postMessage(createMessage(x))
            }
        };
    }







    return {
        REAL_SET,
        IMAGINARY_SET,
        colors,
        mandelbrot,
        draw,
        callWorker,
    }


}







export default Mandlebrot;




