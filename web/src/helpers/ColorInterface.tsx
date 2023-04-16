

export interface ColorValues {
    c1: number,
    c2: number,
    c3: number,
}
  
export interface ColorSchemeParams {
    point: {x: number, y: number},
    min_x: number, min_y: number,
    max_x: number, max_y: number,
    color_values: ColorValues,
    current_iteration: number,
    maximum_iteration: number,
    maximum_iteration_reached: number
}

export const NewColorValues = (): ColorValues => {
    return { c1: 0, c2: 0, c3: 0 }
}

export const NewColorSchemeParams = (): ColorSchemeParams => {
    return {
        point: {x:0, y:0},
        min_x: Infinity, min_y: Infinity,
        max_x: -Infinity, max_y: -Infinity,
        color_values: NewColorValues(),
        current_iteration: 0,
        maximum_iteration: 0,
        maximum_iteration_reached:0

    }
} 



  
  
  