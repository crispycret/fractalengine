
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, FormGroup, Form, InputGroup } from "react-bootstrap";
import { IoMdSettings } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';

import Mandlebrot from "../../helpers/engine/mandlebrot";
import ThemedComponent from "../utils/theme/ThemedComponent"




export const HomeButton = ({theme}: any) => {
    return (
        <ThemedComponent theme={theme}>
            <div className='float-end my-2 mx-2 bg-transparent position-sticky' style={{zIndex:1}}>
                <Link to='/' className='bg-transparent' >
                    <Button className='bg-transparent border-0'>
                        <AiFillHome fontSize={24}  className='bg-transparent'/>
                    </Button>
                </Link>
            </div>
        </ThemedComponent>
    )
}


export const SettingsToggle = ({theme, show, setShow}: any) => {
    return (
        <ThemedComponent theme={theme}>
            <div className='float-start m-2 bg-transparent position-sticky' style={{zIndex:1}}>
                <Button className='bg-transparent border-0 text-center' onClick={() => setShow(!show)}>
                    <IoMdSettings className='text-center bg-transparent'/>
                </Button>
            </div>
        </ThemedComponent>
    )

}

export const SettingsPanel = ({theme, show, settings, setSettings}: any) => {
    console.warn("SettingsPanel")
    console.warn(settings)
    const [maxIterations, setMaxIterations] = useState(settings ? settings.MAX_ITERATION.toString() : '80');
    const [escapeRadius, setEscapeRadius] = useState('2.0');
    const [realStart, setRealStart] = useState(settings ? settings.REAL_SET.start.toString() : '-2');
    const [realEnd, setRealEnd] = useState(settings ? settings.REAL_SET.end.toString() : '1');
    const [imaginaryStart, setImaginaryStart] = useState(settings ? settings.IMAGINARY_SET.start.toString() : '-1');
    const [imaginaryEnd, setImaginaryEnd] = useState(settings ? settings.IMAGINARY_SET.end.toString() : '1');

    const [zoom, setZoom] = useState(settings ? settings.ZOOM.toString() : '200');


    const onSubmit = (e:any) => {
        e.preventDefault()

        console.log("SUBMIT")

        setSettings({
            ZOOM: Number.parseInt(zoom),
            MAX_ITERATION: Number.parseInt(maxIterations),
            REAL_SET: {start: Number.parseFloat(realStart), end: Number.parseFloat(realEnd)},
            IMAGINARY_SET: {start: Number.parseFloat(imaginaryStart), end: Number.parseFloat(imaginaryEnd)}
        })
    }

    return (
        
        <>
            {show ?
                <ThemedComponent theme={theme}>
                <Container className={`col-2 float-start mx-0 my-5 position-sticky ${theme.isDark ? 'bg-dark' : 'bg-light'}`} style={{zIndex:1}}>
                <Form onSubmit={(e) => onSubmit(e)} className=' ' >
                        <FormGroup className=''>
                            <Form.Label fontSize={28} className={` text-center ${theme.isDark ? 'text-white' : 'text-dark'}`}>Settings</Form.Label>
                            <InputGroup className="mb-2 border border-0 border-square ">
                                    
                                <InputGroup.Text id="zoom-label" className={`border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white ' : 'text-black bg-light'}`}>
                                    Zoom
                                </InputGroup.Text>
                                <Form.Control 
                                    id="zoom" aria-describedby="zoom" 
                                    className={`text-end border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}
                                    value={zoom} onChange={(e: any) => {
                                        setZoom(e.currentTarget.value)
                                    }}
                                />  
                            </InputGroup>


                            <InputGroup className="mb-2">
                                <InputGroup.Text id="maxIterations-label" className={`border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}>
                                    Iterations
                                </InputGroup.Text>
                                <Form.Control 
                                    id="maxIterations" aria-describedby="maxIterations" 
                                    className={`text-end border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}
                                    value={maxIterations} onChange={(e: any) => {
                                        setMaxIterations(e.currentTarget.value)
                                    }}
                                />
                            </InputGroup>
                                
                                    
                            <InputGroup className="mb-2">
                                <InputGroup.Text id="escapeRadius-label" className={`border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}>
                                    Escape
                                </InputGroup.Text>
                                <Form.Control 
                                    id="escapeRadius" aria-describedby="escapeRadius" 
                                    className={`text-end border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}
                                    value={escapeRadius} onChange={(e: any) => {
                                        setEscapeRadius(e.currentTarget.value)
                                    }}
                                />
                            </InputGroup>
                                
                            <InputGroup className="mb-2 text-center">
                                <Form.Label id="realEnd-label" className={` text-center border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}>
                                        Real
                                </Form.Label>
                            </InputGroup>
                                    
                            <InputGroup className="mb-2">
                                <InputGroup.Text id="realStart-label" className={`border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black  bg-light'}`}>
                                    Start
                                </InputGroup.Text>
                                <Form.Control 
                                    id="realStart" aria-describedby="realStart" 
                                    className={`text-end border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}
                                    value={realStart} onChange={(e: any) => {
                                        setRealStart(e.currentTarget.value)
                                    }}
                                />
                            </InputGroup>
                                
                            <InputGroup className="mb-2">
                                <InputGroup.Text id="realEnd-label" className={`border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}>
                                    End
                                </InputGroup.Text>
                                <Form.Control 
                                    id="realEnd" aria-describedby="realEnd" 
                                    className={`text-end border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}
                                    value={realEnd} onChange={(e: any) => {
                                        setRealEnd(e.currentTarget.value)
                                    }}
                                />
                            </InputGroup>
                                
                            <InputGroup className="mb-2 text-center">
                            <InputGroup.Text id="realEnd-label" className={`border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}>
                                    Imaginary
                            </InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-2">                                        
                                <InputGroup.Text id="imaginaryStart-label" className={`border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}>
                                    Start
                                </InputGroup.Text>
                                <Form.Control 
                                    id="imaginaryStart" aria-describedby="imaginaryStart" 
                                    className={`text-end border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}
                                    value={imaginaryStart} onChange={(e: any) => {
                                        setImaginaryStart(e.currentTarget.value)
                                    }}
                                />
                            </InputGroup>

                            <InputGroup className="mb-2">                                        
                                <InputGroup.Text id="imaginaryEnd-label" className={`border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}>
                                    End
                                </InputGroup.Text>
                                <Form.Control 
                                    id="imaginaryEnd" aria-describedby="imaginaryEnd" 
                                    className={`text-end border-0 border-square m-0 px-1 py-0 ${theme.isDark ? 'text-white' : 'text-black bg-light'}`}
                                    value={imaginaryEnd} onChange={(e: any) => {
                                        setImaginaryEnd(e.currentTarget.value)
                                    }}
                                />
                            </InputGroup>

                            <Button type="submit">Apply</Button>
                        </FormGroup>
                    </Form>
                </Container>
                </ThemedComponent>
                : <></>
            }
        </>
    )
}


export const Settings = ({theme, settings, setSettings}: any) => {

    const [show, setShow] = useState(false)


    return (
        <>
            <SettingsToggle theme={theme} show={show} setShow={setShow} />
            <SettingsPanel theme={theme} show={show} settings={settings} setSettings={setSettings} />
        </>
    )
}   


