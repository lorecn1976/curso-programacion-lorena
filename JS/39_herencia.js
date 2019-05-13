// Personas
    // Alumnos

    function Persona(nombre, edad) {    
    }
    
    Persona.prototype.saludar = function(aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    }
    
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre
        this.edad = edad
        this.curso = curso
    }
    
    Alumno.prototype = new Persona()
    Alumno.prototype.constructor = Alumno
    
    const alumno1 = new Alumno('Pepe', 23, 'JavaScript')
    const alumno2 = new Alumno('Elena', 22, 'JavaScript')
    
    console.log(alumno1)
    alumno1.saludar()
    alumno2.saludar(alumno1.nombre)
    
    
    ///////////////////////////////////////////////////
    
    // Herencia prototípica (prototypal inheritance)
    // Basándose en la idea de que los objetos heredan de objetos de Douglas Crockford
    console.clear()
    
    const person1 = {
        nombre: 'Pepe',
        edad: 25,
        saludar: function(aQuien = 'amigo') {
            console.log(`Hola ${aQuien}, soy ${this.nombre}`)
        }
    }
    
    user1 = Object.create(person1)
    user1.clave = '1234'
    
    console.log(user1)
    console.log(user1.nombre)
    user1.saludar()
    
      32  JS/40_clases_ES6.js 
    @@ -0,0 +1,32 @@
    class Persona {
        constructor (nombre, edad) {
            this.nombre = nombre
            this.edad = edad
            this.alma = true
        }
        saludar (aQuien = 'amigo') {
            console.log(`Hola ${aQuien}, soy ${this.nombre}`)
        }
    }
    
    person1 = new Persona('Pepe', 23)
    
    person1.altura = 175
    
    console.log(person1)
    person1.saludar()
    
    class Alumno extends Persona {
        constructor(nombre, edad, curso) {
            super(nombre, edad)
            this.curso = curso
        }
        saludar(aQuien = 'amigo') {
            super.saludar(aQuien)
            console.log(`Estoy estudiando ${this.curso}`)
        }
    }
    
    alumno1 = new Alumno('Elena', 22, 'WordPress')
    console.log(alumno1)
    alumno1.saludar() 