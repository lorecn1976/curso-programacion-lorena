//Existen los operadores aritmeticos +-*/% (modulo)

let x = 22
let nombre = 'Pepe'
let z = '2'


//let difision = 10 / 2
let division = x / z

console.log(division)
console.log(typeof z)

//NaN (not a namber=no puedo convertirme en un número. Pero al poder SIEMPRE transformar un string en un number tiene que poder hacerlo, por lo que le da un valor por fuerza)
division = x / nombre
console.log(division)
console.log(0 / 0)
console.log(-1 / 0)

/*NaN equivale al concepto matemático de indeterminacion
0 / n = 0
n / 0 = Infinito
0 / 0 = Nan
*/

//Si quiero evitar indeterminaciones debo validar los datos

function dividir(x, y) {
    if (isNaN(x) || isNaN(y)) {
        console.log('operadores invalidos')
        return
    console.log('la division da', x / y, '€')
    }
    return x / y
}

dividir(x,z)
dividir(x,nombre)

//Si hay strings tiene preferencia la concatenacion
console.log(x + z)

//para evitarlo tenemos que forzar el casting

console.log(parseFloat(x) + parseFloat(z))
console.log( Number(x)+ Number(z))
console.log(+x + +z)