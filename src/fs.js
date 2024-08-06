const fs = require("fs");

/*
const first = fs.readFileSync("./data/first.txt", "utf-8");
const second = fs.readFileSync("./data/second.txt");

console.log(first);
console.log(second.toString());

const texto = " (esto es un agregado)";

fs.writeFileSync("./data/fourth.txt", texto, {
  flag: "a",
}); // con flag:'a' podemos agregar más texto a los ya creados
*/

fs.readFile('./data/first.txt', (err,data) => {
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})