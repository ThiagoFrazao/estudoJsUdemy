const express = require('express')
const app = express()
const porta = 8080

let produtos = [
    {
        nome: 'Notebook',
        preco: 123.4
    },
    {
        nome: 'Geladeira',
        preco: 1233.4
    },
    {
        nome: 'Celular',
        preco: 544.16
    }
]

app.get("/produtos", (req, res, next) => {
    res.send(produtos)
})

app.listen(porta, () => {
    console.log(`Servidor sendo executado na porta ${porta}`)
})