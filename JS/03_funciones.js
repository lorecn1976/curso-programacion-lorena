function suma(x,y){
    let r =x+y
    return r
}

function mostrar(texto){
    console.log(texto)
}

let number1 = 23
let number2 = 20
//console.log(r) esto daria un error
let result = suma (number1, number2)
mostrar(result)


//No se cumple la separacion de objetivos (separation of concerns)

function sumarMal (x,y) {
    let r = x+y
    console.log(r)
}

sumarMal(2,5)
