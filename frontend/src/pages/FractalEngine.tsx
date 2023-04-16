

import {useState, useEffect} from 'react';


import {generate} from '../apis/FractalEngine';


export const FractalEngine = () => {

    function draw () {
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        let ctx = canvas.getContext('2d');

        if (ctx == null || ctx == undefined) return
        ctx.fillStyle = 'blue';     

        generate()
        .then(res => {
            console.log(res)
            for (let row in res.data) {
                for (let col in res.data[row]) {
                    if (res.data[row][col] == null) {
                        continue;
                    }
                    ctx?.fillRect(parseInt(row), parseInt(col), 1, 1);
                }           
            }

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <button onClick={draw} style={{width: '25px', height: '25px'}}></button>
            <canvas id='canvas' style={{width:window.innerWidth-17.5, height:window.innerHeight}}>

            </canvas>
        </div>
    )

}


export default FractalEngine;