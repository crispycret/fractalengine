import { Button, Container, ListGroup, Image, Col } from "react-bootstrap"

import Theme from "../../helpers/hooks/useTheme"
import ThemedComponent from "../utils/theme/ThemedComponent";

import Header from "./Header";
import Spacing from "../utils/Spacing";
import { Link } from "react-router-dom";




interface HomeProps {
    theme: Theme;
}
export const Home = ({theme}: HomeProps) => {

    const backgroundLight = 'https://wallpapercave.com/dwp2x/J1lLMYg.png'
    const backgroundDark = 'https://files.realpython.com/media/wikimedia_Mandel_zoom_00_mandelbrot_set.54d99530ad68.jpg'

    return (
    // <ThemedComponent theme={theme}>
            <div className='w-100 min-vh-100' style={{ 
                backgroundSize: '100vw 100vh',
                backgroundImage: `url(${theme.isDark ? backgroundDark : backgroundLight})` 
            }}>

            <Container className=' text-center'>
                <div className='py-3 bg-transparent' />

                <ListGroup variant={theme.variant()}>
                    <Header fontSize={32}>Fractal Engine</Header>
                </ListGroup>

                <Spacing count={4} />


                <Container className='text-center align-items-center col-8'>
                    <div>
                        <ThemedComponent theme={theme}>
                            <Link to='/demo'>
                                <Button className='col-2'>Demo</Button>
                            </Link>
                        </ThemedComponent>
                    </div>
                    <div className='mt-1'>
                        <ThemedComponent theme={theme}>
                            <Link to='/login'>
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