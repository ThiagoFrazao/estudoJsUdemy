const express = require('express')
const cool = require('cool-ascii-faces')
const app = express()
const porta = process.env.PORT || 5000
const bodyParser = require('body-parser')
const BancoTeste = require('./persistencia/bancoTeste')
const bancoDeDados = new BancoTeste() //TO LEARN: tem um jeito melhor de fazer isso?

app.use(bodyParser.urlencoded({extended: true}),bodyParser.json())

app.get('/', (req,res) => res.send(cool()))
app.get('/cool', (req,res) => res.send(cool()))

app.get("/produtos", (req,res) => {
    res.send(bancoDeDados.getProdutos())
})

app.get("/produtos/:id", (req,res) => {
    let produto = bancoDeDados.getProduto(req.params.id)
    if(produto){
        res.send(produto)
    } else {
        res.send({"mensagem":`Produto ${req.params.id} nao esta disponivel no momento.`})
    } 
})

app.post("/produtos", (req,res) => {
    let nomeProduto = req.body.nome
    let precoProduto = req.body.preco
    if(nomeProduto && precoProduto){
        res.send(bancoDeDados.salvarProduto(nomeProduto,precoProduto))
    } else {
        res.status(400).send({"erro":"Produto incompleto. Produto deve possuir nome e preco para ser valido."})
    }
})

app.put("/produtos/:id", (req,res) => {
    let idProduto = req.params.id
    produto = bancoDeDados.getProduto(idProduto)
    if(produto){
        console.log(req.body)
        let nomeProduto = req.body.nome
        let precoProduto = req.body.preco
        res.send(bancoDeDados.salvarProduto(nomeProduto, precoProduto, idProduto))
    } else {
        res.send({"erro":`Produto ${req.params.id} nao pode ser atualizado por que ele nao existe no banco.`})
    }
})

app.delete("/produtos/:id", (req,res) => {
    let idProduto = req.params.id
    produto = bancoDeDados.getProduto(idProduto)
    if(produto){
        bancoDeDados.removerProduto(idProduto)
        res.send({"mensagem":`Produto ${idProduto} removido com sucesso!`})
    } else {
        res.send({"erro":`Produto ${req.params.id} nao pode ser removido por que ele nao existe no banco.`})
    }
})

app.listen(porta, () => {
    console.log(`Servidor sendo executado na porta ${porta}`)
})