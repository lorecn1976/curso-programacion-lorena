
let vuelo1 = {
    //let vuelo=new Objet

    aerolinea: 'Oceanic',
    number: '815',
    departure: {
        claveIATA: 'SYD',
        time: '2004-09-22 14:55',
        ciudad: 'Sydney',},

    arrival: {
        claveIATA: 'LAX',
        time: '2004-09-23 10:42',
        ciudad: 'Los Angeles',}
    }

    let datos='departure'
    //let datos='arrival


    //notacion por puntos
    //console.log(vuelo.number)
//console.log(vuelo.datos)


//notacion por corchetes: permite usar variables para los nombres de propiedades
    console.log(vuelo['number'])
    console.log(vuelo[datos])



   