import { ColorSchemeParams } from "./ColorInterface"



export const setup = (params:ColorSchemeParams) => {
    if (params.min_x == null) params.min_x = params.point.x
    if (params.min_y == null) params.min_y = params.point.y
    if (params.max_x == null) params.max_x = params.point.x
    if (params.max_y == null) params.max_y = params.point.y
}


export const color_included_1 = (params: ColorSchemeParams) => {
  
    setup(params)
  
    if (params.min_x < params.point.x) {
      params.min_x = params.point.x
      params.color_values.c1 += 3
    }
  
    params.color_values.c3 = params.current_iteration / params.maximum_iteration_reached * 100
  
    if (params.color_values.c3 >= 99) params.color_values.c3 = 99
  
    if (params.min_x < params.point.x) {
      params.min_x = params.point.x
      params.color_values.c1 -= Number(Math.random() * 5)
    }
  
    if (params.min_y < params.point.y) {
      params.min_y = params.point.y
      params.color_values.c2 -= Number(Math.random() * 5)
    }
  
    if (params.color_values.c2 <= -1) params.color_values.c2 = 100
  
    if (params.color_values.c1 >= 120) {
      params.color_values.c1 = 0
    }
}





export const color_included_2 = (params: ColorSchemeParams) => {
  
    setup(params)
    
    params.color_values.c3 = params.current_iteration / params.maximum_iteration_reached * 100
  
    

    if (params.min_y > params.point.y) {
      params.min_y = params.point.y
      params.color_values.c1 += Number(Math.random() * 4)
    }
  
    if (params.color_values.c2 <= -1) params.color_values.c2 = 100
  
    if (params.color_values.c2 >= 100) {
      params.color_values.c1 = 0
    }
}



export const randomize = (params: ColorSchemeParams) => {
  
    setup(params)
    
    params.color_values.c3 = params.current_iteration / params.maximum_iteration_reached * 100
    params.color_values.c1 += Math.floor(Number(Math.random() * 80)) + 100
    params.color_values.c2 += Math.floor(Number(Math.random() * 20)) + 20
}










export const included_color_schemes = [
    // color_included_1,
    randomize,
    // color_included_2,
  ];
  

  








  