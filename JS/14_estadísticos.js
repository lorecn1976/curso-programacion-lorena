/** 
 * Programa de calculo de estadisticos como la media aritmetica
 * que es la suma de los elementos/numero de elementos
 * 
*/

/**
 * Function mediaAr
 * @param datos: array
 * @returns: number
 */

 /**
function mediaAr(){}

 function suma(x=0,y=0){
     return number(x)+number(y)
 }
 */
/** 
 //ES6 spread operator/Operador de separacion (agrupador)
 function sumaPlus(x=0,y=0, ...otros){
     if (otros){
         console.log('Sin usar', otros)
     }
 }
    
 
 return number (x)+ number (y)

 console.log(suma('2','5'))
 console.log(suma(2))
 console.log((2,5,6,8))
*/


/**
 * Function mediaAr
 * @param datos: array
 * @returns: number
 */

function mediaAr(datos=[],...otros){

    if(!Array.isArray(datos)) {
        //NO es un array
        datos=[datos]
        datos=datos.concat(otros)
    }
    console.log(datos)
    let r=0
    let sumatorio=0
    for (let i = 0; i < datos.length; i++) {
        const element = datos[i];
        r=r+element
        //sumatorio=sumatorio+element
        //r=r+element
          }
        //r=sumatorio/datos.length
        console.log(sumatorio)
        console.log(datos.length)
        r=r/datos.length
        return r
      
}


let numeros=[3,5,6,4,2,5]
console.log(mediaAr(numeros))