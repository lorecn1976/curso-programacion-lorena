export function controller (){
    console.log('controller cargado')


    let nombre = ''
    let msnInicial
/**
 *Nodos del DOM    
 */

const inNombre=document.querySelector("#in-nombre")
const btnBorrar=document.querySelector('#btn-borrar')
const output=document.querySelector('#output')

msnInicial=output.innerHTML+' '

/**
 *Asignar manejadores de eventos(lo que tiene que hacer)
 */

inNombre.addEventListener('input', onInputNombre)
btnBorrar.addEventListener('click', borrar)

function onInputNombre(){
    nombre=inNombre.value
    output.innerHTML = msnInicial+nombre
}
function borrar(){

}
}