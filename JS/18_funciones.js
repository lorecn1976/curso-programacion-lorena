console.log(suma (4,6))
console.log(resta(6,3))

/**
 * Funcion declarada
 * Existe "hoisting"(alzamiento)
 */
function suma(x=0, y=0) {
    return x+y
}


/**
 * Funcion asignada.
 * 
 * Una funcion es un dato de tipo objeto
 */


let obj={}

let resta=function (x=0, y=0){
    return x-y
}


/**
 * En ES6 aparecen las arrow(=>) funtion
 */

 //let producto=function (x=1, Y=1)=>{return x*y}
let producto = (x=1,y=1)=>x*y

let cuadrado=(x) => x*x

console.log(suma (4,6))
console.log(resta(6,3))
console.log(producto(4,7))
console.log(cuadrado(6))

