const os = require('os');

const hora = Math.round(Math.round(os.uptime()) / 3600)

let palabra = 'hour'

if(hora > 1){
    palabra = 'hours' 
}

console.log(hora+' '+palabra);