let numeros=[1,2,4,6]
let amigos=['pepe','rosa','juan']
let deTodo=[1,45,'perro','gato',true,]

//console.log(deTodo)

for (let i = 0; i < amigos.length; i++) {
    const element = amigos[i];
    console.log(`hola ${element}`)
}

/**
 * 
 * Programa que compruebe si un nombre ha sido usado alguna vez por un rey de España
 * 
 */

 /**
  * function...isRey
  * @name:string
  * @returns:boolean  
 */


function isRey(name){let reyes =['Fernando', 'Isabel', 'Carlos', 'Felipe', 'Luis', 'Jose', 'Amadeo', 'Alfonso', 'Juan Carlos']
for (let i = 0; i < reyes.length; i++) {
    const rey = reyes[i];
    if(rey.toLocaleLowerCase() ===name.toLocaleLowerCase()){
        return true
    }
    }
    return false
}


/**
 * Function mostrar
 * @param name: string
 * @return: void
 */
function mostrar(name){

    let i 
    let mensaje=[`El nombre ${name} ha sido usado por un rey de España`,
   `El nombre ${name} no ha sido usado por un rey de España`]
    if (isRey(name)){
        i=0
    }
console.log(mensaje[i])
}

let name='Carlos'
//name='Ernesto'
mostrar(name)


 