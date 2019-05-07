let datos =[]
//let datos= new array()
datos=[1,2,3,5,7,9]
datos.push(45)

function numeroAlAzar100(){
    return Math.random()*100
}

/**
 * Crea un array de n aleatorios, como minimo 1 
 * function aleatorios
 * @param: limite: number
 * @returns: array [number]
 * 
 */


 function aleatorios(limite=1){
     let r =[]
     for (let i = 0; i < limite; i++) {
         r[i]= numeroAlAzar100()
         
     }

     return r
 }

 console.log(aleatorios(12))

 