//En ES6 se utulizan let y const para declarar variables

let nombre //declarar
nombre = 'Pepe'//inicializar

let edad = 34 //Declarar e inicializar

//Tipos de datos

//undefined
let data
mostrar(data)


//strings
data = 'Hola amigos'
mostrar(data)

//numbers
data = 35
mostrar(data)

//booleans
data = true
data = false
mostrar(data)

//object
data = { nombre: 'Pepe', edad: 34 }
mostrar(data)

//object tipo array
data = [23, 45, 78]
mostrar(data)

function mostrar(imput) {
    console.log('el dato recibido es', input)
    console.log(typeof input)
}

mostrar(mostrar)
