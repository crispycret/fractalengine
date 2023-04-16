import { useEffect } from "react";
import { Button, Container, ListGroup } from "react-bootstrap"

import { BsFillLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi'
import Theme from "../../../helpers/hooks/useTheme"
import ThemedComponent from "./ThemedComponent"



export interface ThemeTogglerProps {
    theme: Theme;
}

export const ThemeToggler = ({theme}: ThemeTogglerProps) => {

    
    useEffect(() => {
        theme.setTransparent(true)
        theme.update()
    }, [])


    return (
        <ThemedComponent theme={theme}>
            <div className='float-end m-2 bg-transparent position-sticky' style={{zIndex:1}}>
                <Button className='text-center p-0 m-1 bg-transparent border-0' 
                    onClick={() => theme.toggle()} 
                    // variant={theme.variant()}
                >
                    { theme.isDark ? 
                        <HiLightBulb fontSize={24} className='text-center bg-transparent'/>
                    : 
                        <HiOutlineLightBulb fontSize={24} className='text-center bg-transparent'/>
                    }
                </Button> 
            </div>
        </ThemedComponent>
    )


}


export default ThemeToggler

