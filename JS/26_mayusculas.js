/**
 *Dada una cadena de caracteres hay que indicar si está formada solo por letras mayusculas, minusculas o ambas. 
 */

 /**
  * function probarCadena
  * @param cadena: string
  * @returns: number
  * -0=solo por letras mayusculas,
  * -1=solo por letras minúsculas,
  * -2=solo po rla combinación de ambas
  */ 

  function probarCadena(cadena=''){
      let r=2
      if (cadena===cadena.toUpperCase()){
          r=0
      }else if(cadena===cadena.toLocaleLowerCase()){
          r=1
      }
      return r
  }

  /**
   * function comoEsLaCadena
   * @param: cadena:string
   * @returns: void
   */

   function comoEsLaCadena(cadena=''){
        let mensajes =[
            'La cadena está formada solo por letras Mayusculas',
            'La cadena está formada solo por letras Minusculas',
            'La cadena está formada solo por ambas letras'
        ]

        console.log(mensajes[probarCadena(cadena)])
   }

   let texto

   texto='MI NOMBRE ES LORENA'

   comoEsLaCadena(texto)

   texto='ha salido bien!!!!'

   comoEsLaCadena(texto)

   texto='Una ultima Prueba'

   comoEsLaCadena(texto)