const fs = require('fs');

console.log((process.hrtime()[0] / 60).toFixed(5));
console.log('Antes da leitura do texto');

const dados = fs.readFileSync("file.txt");

console.log("Executando Leitura")

console.log((process.hrtime()[0] / 60).toFixed(5));