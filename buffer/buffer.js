const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso Completo de NodeJS')

console.log(buf.toString());
console.log(buf.toString('utf16le'));

const buf_string = Buffer.from('Carregando uma String', 'utf-8')

console.log(buf_string.toString())

console.log(buf_string.toString('utf-8'))
