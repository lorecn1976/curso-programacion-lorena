/**
 * Las funciones son objetos
 * Se pueden pasar como parámetros =CALLBACK
 *  
 */

function mostrarResultado(x=0, y=0, operacion){
    console.log(`El resultado con ${x} e y ${y} es`)
    console.log(operacion(x,y))
}

let suma=function(x,y){return x+y}
mostrarResultado(11,12, suma)