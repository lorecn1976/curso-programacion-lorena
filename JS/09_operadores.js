//Asignacion

let x=23
//x=x+1
x++
//x=x-1
x--

//Aritmeticos
let y=2

let r
r=x+y//25
r=x-y//21
r=x*y//46
r=x/y//11.5---esto es la division entera
r=parseInt(x/y)//11---esto es la division pero dando un valor entero como resultado. El resto hay que pedirselo, es la siguiente linea
// r = Math.round (redondea si es menor de 0.5 al valor entero por debajo)
//r= Math.floor(redondea a la baja)
//r= Math.ceil(redondea al alza)
r=x%y
console.log('resultado', r)

let y=2
y+=3
//y=y+3
y=-=3
//y=y-3
y*=2
y/=3
//y=y%2
y%=2


//operador ternario
let edad=15
let i 
if (edad>=18){
    i=0
}else {
    i=1
}

i=(edad>=18)?0:1
console.log('indice',i)

//Objetos en notacion JSON
let user={
    nombre:'Pepe', 
    edad: '23'
}
console.log(user.nombre)

//Arrays
let numeros=[12, 45, 67]
let usuarios=['pepe', 'juan', 'rosa','maria']
console.log(usuarios [0])
usuarios[usuarios.length]='ramon'
usuarios[usuarios.length]='carolina'
usuarios[100]='ernesto'
console.log(usuarios.length)

//mensajes al usuarios

let mensajes=[
    'Bienvenido al casino',
    'No se permiten menores'
]



console.log(mensajes[i])