/**
 * Calculo del factorial mediante recursividad 
 * 
 */

/* Function factorial
* @param num: number
* @returns: num
* Se calcula el producto de num por todos los inferiores a él hasta el 1
* ees decir, el producto de 1 por todos los superiores hasta llegar a num
*   
*/



function factorial(num) {
       if (num <= 0) {
        return 0//entraria el 0 y los negativos
    }
    if (num === 1) {  
        return num   
    }
    return num* factorial(num-1)
}


let n=5
n=0
n=64
console.log(factorial(64))

//copiar su ejercicio 17