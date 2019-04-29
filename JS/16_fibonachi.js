/**
 * Programa para calcular los numeros de la serie fibonachi por debajo de un valor dado
 * 
 * Partiendo de 0 y 1, cada elemento de la serie se calcula como la suma de los dos anteriores
 */
/**Function fibonachi
 * 
 * @param limite: number
 * @return: array [number]
 */

/** 
function fibonachi(limite){
        
        let i= 0
        let j= 1
        let serie= [i]

        while (j<=limite){
            let next=i+j
            i=j
            j=next
            serie.push(i)
        }
       return serie         
   }

   let limite =8
   console.log(fibonachi(limite))
*/



function fibonachiFor(limite) {

    let i = 0
    let j = 1
    let serie = [i]

    /*
    for (let index = 0; index < 50; index++) {
        let next = i + j
        i = j
        j = next
        serie.push(i)
        if (j > limite){
            break
        }
 }*/

 for (let i = 0,j= i;i=j, j < next){
     serie.push(i)
 
     next=i+j
    
 }

return serie
}
let limite =8
console.log(fibonachiFor(limite))