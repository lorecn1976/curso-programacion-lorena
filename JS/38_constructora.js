const user1 ={
    nombre: 'Pepe',
    edad: 25,
    saludar: function(aQuien = 'amigo'){
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
   }

   function User (nombre, edad) {
       this.nombre=nombre
       this.edad=edad
       this.saludar=function(aQuien = 'amigo'){
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
   }

let user2=new User('Elena', 23)
let user3=new User('Ernesto', 30)


console.log(user1)
console.log(user2)
console.log(user3)

user1.saludar('Ernesto')
user2.saludar('Pepe')

/*function saludar (user){
    console.log(`Hola, soy ${user}`)
}

saludar ('Pepe')*/