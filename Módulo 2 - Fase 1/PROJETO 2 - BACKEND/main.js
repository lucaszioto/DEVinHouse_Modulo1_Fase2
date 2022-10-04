const { response } = require('express')
const express = require('express')
const app = express()

app.get('/tasks', (request, response) => {
    console.log('Entrei nas tarefas')
    response.json({message: 'Ola mundo', teste: '123'})
})

app.listen(3333, () => {
    console.log('Servidor Online')
})