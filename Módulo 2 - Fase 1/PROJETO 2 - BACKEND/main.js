const express = require('express')
const app = express()

app.get('/tasks', () => {
    console.log('Entrei nas tarefas')
})

app.listen(3333, () => {
    console.log('Servidor Online')
})