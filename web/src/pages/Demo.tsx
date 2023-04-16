
import { useEffect, useRef, useState } from "react";

import { HomeButton, Settings } from "../components/demo/DemoSettings";
import Mandlebrot from "../helpers/engine/mandlebrot";


export const Demo = ({theme}: any) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null) 

    const [settings, setSettings] = useState({
        ZOOM: 100,
        MAX_ITERATION: 80,
        REAL_SET:{ start: -2, end: 1 },
        IMAGINARY_SET:{ start: -1, end: 1 }
    })

    const draw = () => {
        if (!canvasRef ) return
        if (!canvasRef.current ) return

        let mandlebrot = Mandlebrot()
        mandlebrot.callWorker(canvasRef.current, settings)
    }


    useEffect(() => {
        console.log("DRAW")
        draw()
    }, [settings])
    

    return (
        <>
            <HomeButton theme={theme} />
            <Settings theme={theme} settings={settings} setSettings={setSettings}/>
        
            <canvas ref={canvasRef} 
                className='border-0 m-0 p-0'
                width={`${window.screen.width}`} 
                height={`${window.screen.height}`} 
            />
        </>
    )
}



export default Demo