



// Color using normal method
// mask over with mandelbrot coloring schema to draw shapes on

import { ExpandLessTwoTone } from "@mui/icons-material";
import { Color } from "@mui/material";

import { ColorSchemeParams, ColorValues } from "./ColorInterface";
import { NewColorSchemeParams, NewColorValues } from "./ColorInterface";
import { included_color_schemes } from "./ColorIncludedSchemes";
import { excluded_color_schemes } from "./ColorExcludedSchemes";








export const draw_mandelbrot = (ctx:any, max_iters:number, content:any) => {
  ColorIncludedPoints(ctx, content[0][0], content[1])
  // ColorExcludedPoints(ctx, content[0][1])
}




export const ColorIncludedPoints = (ctx: any, included_points:any, max_iter:number) => {

  var params = NewColorSchemeParams()
  params.color_values.c2 = 100
  params.maximum_iteration_reached = max_iter

  for (var idx in included_points) {
    params.point = {x: included_points[idx][0], y: included_points[idx][1]}
   
    params.current_iteration = included_points[idx][2]

    RandomizeColoring(params, included_color_schemes)
    
    ctx.fillStyle = 'hsl(' + params.color_values.c1 +  ', ' + params.color_values.c2 + '%, ' + params.color_values.c3 + '%)';
    ctx.fillRect(params.point.x, params.point.y, 1, 1)  
  }
}



export const ColorExcludedPoints = (ctx: any, excluded_points:any) => {

  var params = NewColorSchemeParams()

  params.color_values.c2 = 100

  for (var idx in excluded_points) {
    params.point = {x: excluded_points[idx][0], y: excluded_points[idx][1]}

    RandomizeColoring(params, excluded_color_schemes)
    
    ctx.fillStyle = 'hsl(' + params.color_values.c1 +  ', ' + params.color_values.c2 + '%, ' + params.color_values.c3 + '%)';
    ctx.fillRect(params.point.x, params.point.y, 1, 1)  
  }
  
}





export const RandomizeColoring = (params:ColorSchemeParams, color_schemas:any): ColorSchemeParams => {
  
  var idx = Math.floor(Math.random() * color_schemas.length)
  console.log(idx)
  
  return color_schemas[idx](params);
}








































// export const color_in_set  = (ctx:any, in_set:any, max_iter_reached:number) => {


//   var last_x = null;
//   var last_y = null;
//   var [c1, c2] = [0, 100];

//   for (var point in in_set) {

//     var colorValue = i / max_iter_reached * 100

//     if (colorValue >= 99) colorValue = 99

//     if (last_x == null) last_x = x
//     if (last_y == null) last_y = y

//     if (last_y < y) {
//       last_y = y
//       c1 += Number(Math.random() * 5)
      
//       c2 -= Number(Math.random() * 5)
//       // c2 += 5
//     }

//     if (last_x > x) {
//       last_x = x
//       c1 += 2
//     }


//     if (c2 <= 3) c2 = 100

//     if (c1 >= 320) {
//       c1 = 0
//       // c2 -= 3
//       if (c2 <= -5) c2 = 100
//     }

//     // ctx.fillStyle = 'hsl(' + c1 +  ', ' + c2 + '%, ' + colorValue + '%)';
//     ctx.fillStyle = 'hsl(' + Number(Math.random() * 30) +  ', ' + Number(Math.random() * 30) + '%, ' + colorValue + '%)';
//     ctx.fillRect(x, y, 1, 1)  
//   }
  
// }





























