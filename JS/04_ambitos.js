//Ambitos o scope de las variables

//Ambito global
let var1 = 20;


//MUY MALA PRACTICA
//No se accede nunca a las variables globales desde las funciones
function prueba (){
    console.log(var1)
}

prueba()


//los mismo con BUENAS PRACTICAS

let var2 = 30
pruebaBien (var2)

function pruebaBien (x){
    console.log(x)
}
pruebaBien(var2)

//nuevo en ES6 usar let en lugar de var

function condicional(){
    let ext = 22
    if(true) {
        let data = 23
        console.log(ext)
}

conditional()