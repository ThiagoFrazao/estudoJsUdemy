const express = require('express')
const cool = require('cool-ascii-faces')
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

app.get('/cool', (req, res) => res.send(cool()))

app.get("/produtos", (req, res, next) => {
    res.send(produtos)
})

app.listen(porta, () => {
    console.log(`Servidor sendo executado na porta ${porta}`)
})