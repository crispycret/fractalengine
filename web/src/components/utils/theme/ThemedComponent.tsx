import React, { ReactElement } from "react"
import { useEffect } from "react"
import { emitKeypressEvents } from "readline";
import Theme from '../../../helpers/hooks/useTheme';


//  Solution from https://stackoverflow.com/questions/39226928/react-adding-class-to-children-components


export type ThemedComponent = {
    theme: Theme,
    transparent?: boolean,
    children: JSX.Element[] | JSX.Element
}


export const ThemedComponent = ({theme, transparent, children}: ThemedComponent) => {

    /**
     * Apply a function recursively to all children in the given list of elements.
     * @param children 
     * @param fn 
     * @returns ReactElement[]
     */
    const recursiveMap = (
        children: ReactElement[] | ReactElement
    ): ReactElement[] => {
        return React.Children.map(children, child => {
            if (!child.props) return child

            let __classname = theme.isDark ? 'bg-dark text-primary ' : 'text-light '
            __classname = transparent ? __classname + 'bg-transparent ' : __classname

            let props: any = {
                ...child.props,
                className:  `${__classname} ${child.props.className? child.props.className: ''}`
            }

            // Apply this to all children recursively
            if (child.props.children) {
                return React.cloneElement(child, {
                    ...props,
                    children: recursiveMap(child.props.children)
                })
            }
            // Apply theme to child with no children.
            else {
                return React.cloneElement(child, props)
            }
        })
    }

    const ThemedChildren = () => {
        return recursiveMap(children)
    }

    useEffect(() => {
        
    }, [theme.isLight])

    return (
        <>
            { ThemedChildren() }
        </>
    )

}




export default ThemedComponent;

