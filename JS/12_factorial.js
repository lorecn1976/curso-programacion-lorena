for (let i = 0; i < 5; i++) {
    console.log(i)
}
/**
 * Programa de calculo del factorial un número
 */

/**
 * Function factorial
 * @param num: number
 * @returns: num
 * Se calcula el producto de num por todos los inferiores a él hasta el 1
 * ees decir, el producto de 1 por todos los superiores hasta llegar a num
 *   
 */

function factorial(num) {
    if (num<=0) {
        return 0//entraria el 0
           }
    let r = 1
    for (let i = 1; i <= num; i++) {
        r = r * i
    }
    return r
}


/**Usar if/else y un solo return */
function factorial2(num){
    let r=1
    if (num<=0){
        r=0
    }else{
        for(let i = 1; i <= num; i++) {
            r = r * i
        }
    }
return r
}



let number=0
number=5
number=-4
number=5
console.log(factorial2(number))
