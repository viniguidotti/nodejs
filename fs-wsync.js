const fs = require('fs');

console.log((process.hrtime()[0] / 60).toFixed(5));
console.log('Antes da leitura do texto');

const dados = fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    console.log('Executando a leitura do arquivo.txt');
});

console.log("Executando Leitura")

console.log((process.hrtime()[0] / 60).toFixed(5));