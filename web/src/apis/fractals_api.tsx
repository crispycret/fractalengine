
export const help = () => {
    return "\
    fractal rest api help command \
    generate_mandelbrot (width:number, height:number) \
    ";
}

export interface GenerateMandelbrotStruct {
    width: string,
    height: string,
    zoom: string,
    iters: string,
    bounds: string,
    camx: string,
    camy: string,
}


export const generate_mandelbrot = async (params: GenerateMandelbrotStruct): Promise<Array<any> | null>  => {

    // var query = `https://fractal-rest-api.herokuapp.com/mandelbrot?width=${params.width}&height=${params.height}&$iters=${params.iters}&zoom=${params.zoom}&camx=${params.camx}&camy=${params.camy}`
    var query = `http://localhost:5000/engine/mandelbrot?width=${params.width}&height=${params.height}&$iters=${params.iters}&zoom=${params.zoom}&camx=${params.camx}&camy=${params.camy}`

    const response = await fetch(query)
    
    if (!response.ok) return null;

    const content = await response.json();
    return content
}



export interface SaveMandelbrotStruct {
    author: string,
    label: string,
    width: string,
    height: string,
    zoom: string,
    iters: string,
    bounds: string,
    camx: string,
    camy: string,
}



export const save_mandelbrot = async (params: SaveMandelbrotStruct): Promise<Array<any> | null>  => {

    // var query = `https://fractal-rest-api.herokuapp.com/mandelbrot/save?author=${params.author}&label=${params.label}&width=${params.width}&height=${params.height}&$iters=${params.iters}&zoom=${params.zoom}&camx=${params.camx}&camy=${params.camy}`
    var query = `localhost:5000/engine/mandelbrot/save?author=${params.author}&label=${params.label}&width=${params.width}&height=${params.height}&$iters=${params.iters}&zoom=${params.zoom}&camx=${params.camx}&camy=${params.camy}`

    const response = await fetch(query)
    
    if (!response.ok) return null;

    const content = await response.json();
    return content
}


