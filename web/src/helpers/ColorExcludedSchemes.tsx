import { ColorSchemeParams } from "./ColorInterface"

export const setup = (params:ColorSchemeParams) => {
    if (params.min_x == null) params.min_x = params.point.x
    if (params.min_y == null) params.min_y = params.point.y
    if (params.max_x == null) params.max_x = params.point.x
    if (params.max_y == null) params.max_y = params.point.y
}


export const color_excluded_1 = (params:ColorSchemeParams) => {
    setup(params)
    onNewMinX(params, 3)
    onNewMinY(params, 3)
    c2MinCapReset(params, -1, 100)
    c1MaxCapReset(params, 0, 120)
}
  
export const color_excluded_2 = (params:ColorSchemeParams) => {
    setup(params)
    onNewMinX(params, 3)
    onNewMinY(params, 3)
    c2MinCapReset(params, -1, 100)
    c1MaxCapReset(params, 0, 120)
  }
  












  
export const excluded_color_schemes = [
    color_excluded_1,
    color_excluded_2
];
  
  
















  

// Change the color of c1 on a new minimum x.
export const onNewMinX = (params: ColorSchemeParams, step:number) => {
    if (params.min_x < params.point.x) {
        params.min_x = params.point.x
        params.color_values.c1 += step
      }
}

export const onNewMinY = (params: ColorSchemeParams, step:number) => {
    if (params.min_y < params.point.y) {
        params.min_y = params.point.y
        params.color_values.c2 -= step
      }
}


export const c2MinCapReset = (params:ColorSchemeParams, min_cap:number, max_cap:number) => {
    if (params.color_values.c2 <= -1) params.color_values.c2 = 100
}

export const c1MaxCapReset = (params:ColorSchemeParams, min_cap:number, max_cap:number) => {
    if (params.color_values.c1 >= 120) {
        params.color_values.c1 = 0
        // c2 -= 3
        // if (c2 <= -1) c2 = 250
      }
}
