const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200
    res.send('Hello World')
})

app.get('/admin', (req, res) => {
    res.send('Acessando admin')
})

app.get('/admin/:id', (req, res) => {
    res.send('Acessando admin com o id' + req.params.id)
})

app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`)
})