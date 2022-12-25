import ThemedComponent from "../components/utils/theme/ThemedComponent"


import { BsFillLightbulbOffFill, BsLightbulbFill } from "react-icons/bs";
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";
import { FiSettings } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { Button, Container, FormGroup, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";



export const HomeButton = ({theme}: any) => {
    return (
        <ThemedComponent theme={theme}>
            <div className='float-end my-2 mx-2 bg-transparent'>
                <Link to='/' >
                    <Button className='bg-transparent border-0'>
                        <AiOutlineHome fontSize={24}/>
                    </Button>
                </Link>
            </div>
        </ThemedComponent>
    )
}


export const SettingsToggle = ({theme, show, setShow}: any) => {
    return (
        <ThemedComponent theme={theme}>
            <div className='float-start m-2 bg-transparent'>
                <Button className='bg-transparent border-0 text-center' onClick={() => setShow(!show)}>
                    <FiSettings className='text-center'/>
                </Button>
            </div>
        </ThemedComponent>
    )

}

export const SettingsPanel = ({theme, show, setShow}: any) => {
    // const [canvasWidth, setCanvasWidth] = useState(Number(1000).toString())
    // const [canvasHeight, setCanvasHeight] = useState(Number(1000).toString())

    // const [maxIterations, setMaxIterations] = useState(mandelbrot.maxIterations.toString());
    // const [escapeRadius, setEscapeRadius] = useState(mandelbrot.escapeRadius.toString());
    // const [realStart, setRealStart] = useState(mandelbrot.real.start.toString());
    // const [realEnd, setRealEnd] = useState(mandelbrot.real.end.toString());
    // const [imaginaryStart, setImaginaryStart] = useState(mandelbrot.imaginary.start.toString());
    // const [imaginaryEnd, setImaginaryEnd] = useState(mandelbrot.imaginary.end.toString());

    // const [zoom, setZoom] = useState(mandelbrot.zoom.toString());


    return (
            <ThemedComponent theme={theme}>
                {show ?
                    <Container className='col-3 float-start mx-2 my-2'>
                        <Form>
                            <FormGroup>
                                <Form.Label>Settings</Form.Label>
                                <InputGroup className="mb-3">
                                        
                                    <InputGroup.Text id="iterations-label" className={`${theme.isDark ? 'text-primary' : 'text-black'}`}>
                                        Zoom
                                    </InputGroup.Text>
                                    <Form.Control id="iterations" aria-describedby="iterations" className={`${theme.isDark ? 'text-primary' : 'text-black'}`}/>
                                </InputGroup>
                                    
                                              
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="iterations-label" className={`${theme.isDark ? 'text-primary' : 'text-black'}`}>
                                        Iterations
                                    </InputGroup.Text>
                                    <Form.Control id="iterations" aria-describedby="iterations" className={`${theme.isDark ? 'text-primary' : 'text-black'}`}/>
                                </InputGroup>
                                    
                                        
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="iterations-label" className={`${theme.isDark ? 'text-primary' : 'text-black'}`}>
                                        Escape Radius
                                    </InputGroup.Text>
                                    <Form.Control id="iterations" aria-describedby="iterations" className={`${theme.isDark ? 'text-primary' : 'text-black'}`}/>
                                </InputGroup>
                                    
                                        
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="iterations-label" className={`${theme.isDark ? 'text-primary' : 'text-black'}`}>
                                        Real
                                    </InputGroup.Text>
                                    <Form.Control id="iterations" aria-describedby="iterations" className={`${theme.isDark ? 'text-primary' : 'text-black'}`}/>
                                </InputGroup>
                                    
                                <InputGroup className="mb-3">                                        
                                    <InputGroup.Text id="iterations-label" className={`${theme.isDark ? 'text-primary' : 'text-black'}`}>
                                        Imaginary
                                    </InputGroup.Text>
                                    <Form.Control id="iterations" aria-describedby="iterations" className={`${theme.isDark ? 'text-primary' : 'text-black'}`}/>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Container>
                    : <></>
                }
            </ThemedComponent>
    )
}


export const Settings = ({theme}: any) => {

    const [show, setShow] = useState(false)


    return (
        <>
            <SettingsToggle theme={theme} show={show} setShow={setShow} />
            <SettingsPanel theme={theme} show={show} setShow={setShow}/>
        </>
    )

}


export const Demo = ({theme}: any) => {

    // canv 

    return (
        <>

            <HomeButton theme={theme} />
            <Settings theme={theme} />
        
            <canvas width={`${window.screen.width}`} height={`${window.screen.height}`}>
                
            </canvas>
        </>
    )
}



export default Demo