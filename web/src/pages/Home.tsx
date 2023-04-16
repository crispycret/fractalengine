import { Button, Container, ListGroup, Image } from "react-bootstrap"

import Theme from "../helpers/hooks/useTheme"
import ThemedComponent from "../components/utils/theme/ThemedComponent";
import Header from "../components/Home/Header";
import Spacing from "../components/utils/Spacing";
import { Link } from "react-router-dom";


import darkMandelbrot from '../assets/images/darkMandelbrot.png'



interface HomeProps {
    theme: Theme;
}
export const Home = ({theme}: HomeProps) => {

    const backgroundLight = 'https://wallpapercave.com/dwp2x/J1lLMYg.png'
    const backgroundDark = new URL(darkMandelbrot)

    console.log(backgroundDark)

    return (
    // <ThemedComponent theme={theme}>
            <div className='w-100 min-vh-100' style={{ 
                backgroundSize: '100vw 100vh',
                // backgroundImage: `url(${theme.isDark ? backgroundDark : backgroundLight})` 
            }}>

            <Container className=' text-center'>
                <div className='py-3 bg-transparent' />

                <ListGroup variant={theme.variant()}>
                <Header fontSize={32}>Fractal Engine</Header>
                </ListGroup>

                {/* <Spacing count={4} /> */}

                <div className='block w-100 h-100' style={{ 
                    backgroundAttachment: 'fixed',
                    backgroundSize: '100vw 100vh',
                    backgroundImage: `url(${theme.isDark ? backgroundDark : backgroundLight})` 
                }}/> 


                <Container className='text-center align-items-center col-8'>
                    <div>
                        <ThemedComponent theme={theme}>
                            <Button className='col-2'>Demo</Button>
                        </ThemedComponent>
                    </div>
                    <div className='mt-1'>
                        <ThemedComponent theme={theme}>
                            <Link to='/demo'>
                                <Button className='col-2'>Login</Button>
                            </Link>
                        </ThemedComponent>
                    </div>
                </Container>
            
                
            </Container>
        </div>
    // </ThemedComponent>

    )
} 