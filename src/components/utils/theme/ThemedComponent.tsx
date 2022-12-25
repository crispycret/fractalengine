import React, { ReactElement } from "react"
import { useEffect } from "react"
import { emitKeypressEvents } from "readline";
import Theme from '../../../helpers/hooks/useTheme';


//  Solution from https://stackoverflow.com/questions/39226928/react-adding-class-to-children-components


export type ThemedComponent = {
    theme: Theme,
    children: JSX.Element[] | JSX.Element
}


export const ThemedComponent = ({theme, children}: ThemedComponent) => {

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

            let props: any = {
                ...child.props,
                className:  `${theme.isDark ? 'bg-dark text-primary ' : 'text-light '}${child.props.className? child.props.className: ''}`
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

