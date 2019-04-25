//IF sobre valores discretos o limitados de una sola variable
//if (>5)
//if (x==2&& y==3

let Cargo //Gerente, Senior, Junior, Becario
Cargo= 'Gerente'
let bonus

switch (Cargo) {
    case 'Gerente':
        bonus=10000
        break;
    case 'Senior':
        bonus=1000
        break
    default:
        bonus=0
        break;
}

console.log(`Como eres ${Cargo} tu bonus es ${bonus}€`)