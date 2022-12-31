
/**
 * Return a list of 
 * 
 * @param {*} screenX 
 * @param {*} WIDTH 
 * @param {*} HEIGHT 
 * @param {*} MAX_ITERATION 
 * @param {*} REAL_SET 
 * @param {*} IMAGINARY_SET 
 * @returns 
 */
function doYLine({screenX, WIDTH, HEIGHT, MAX_ITERATION, REAL_SET, IMAGINARY_SET})
{
	// console.log(screenX)
	// console.log(WIDTH)

	const mandlebrot = (complex) => {
		let z = { x:0, y:0 }
		let iteration = 0
		let temp, d;

		do {
			temp = {
				x: (z.x**2) - (z.y**2),
				y: 2 * z.x * z.y
			}
			z = {
				x: temp.x + complex.x,
				y: temp.y + complex.y
			}
			d = Math.sqrt((z.x**2) + (z.y**2))
			iteration += 1
		} while (d <= 2 && iteration < MAX_ITERATION)

		// 2 = escape Radius
		return [iteration, d <= 2]
	}


	function calculate_start(screenY){
		return {
			x: REAL_SET.start + (screenX / WIDTH) * (REAL_SET.end - REAL_SET.start),
			y: IMAGINARY_SET.start + (screenY / HEIGHT) * (IMAGINARY_SET.end - IMAGINARY_SET.start)
		}
	}

	let points = []

	for (let screenY=0 ; screenY < HEIGHT ; screenY++) {
		let complex = calculate_start(screenY)
		const [iteration, value] = mandlebrot(complex) 
		points.push([iteration])
	}
	
	return { screenX, points};
}



onmessage = function(event) {
	
	let msg = JSON.parse(event.data)
	let line = doYLine({...msg});
	line = JSON.stringify(line)

	postMessage(line);
};



