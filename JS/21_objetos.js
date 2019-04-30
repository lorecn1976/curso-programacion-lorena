/**
 * Notacion literal o JSON
 */

// user1=new usuario
// user2=new usuario

let user1 = {
    nombre: 'Pepe',
    edad: 24,
    isAlumno: true,
    direccion: {
        calle: 'Pez',
        numero: '3',
        poblacion: 'Madrid'
    },
    saludar: function(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}

let user2 = {
    nombre: 'Rosa',
    edad: 27,
    Curso:'Front'
}

useri.nombre ='Jose'
useri.curso ='Back'

user1.saludar()