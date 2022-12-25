import { useState } from "react"




/**
 * A theme switching controller
 * @returns isLight: bool, isDark: bool, toggle: function
 */

export interface Theme {
    isLight: boolean;
    isDark: boolean;
    update: () => void;
    toggle: () => void;
    variant: (lightVariant?:string) => string
    transparent: boolean;
    setTransparent: any;
}

export const Theme = () => {

    const variant = (lightVariant='primary') => {
        return isDark ? 'dark' : lightVariant
    }

    const [isLight, setIsLight] = useState(true)
    const [isDark, setIsDark] = useState(false)
    const [transparent, setTransparent] = useState(false)

    const toggleBody = () => {
        console.log("theme.Update()")
        if (!isLight)
            document.body.className = document.body.className.replace(' bg-dark', '')
        else 
            document.body.className = document.body.className + ' bg-dark'
    }

    const update = () => {
    }

    const toggle = () => {
        setIsDark(isLight)
        setIsLight(!isLight)
        toggleBody()
        update()
    }

    return {isLight, isDark, toggle, variant, transparent, setTransparent, update}
}


export default Theme