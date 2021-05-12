const Produto = require('../models/produto.js')
class BancoTeste {

    constructor(){
        this._id = 0
        this._produtos = {}
        //criando alguns produtos iniciais
        this.salvarProduto('Notebook',123.4)
        this.salvarProduto('Geladeira',1234.5)
        this.salvarProduto('Celular',544.16)
    }

    proximoId(){
        this._id = this._id + 1
        return this._id
    }

    salvarProduto(nome, preco, id){
        let idNovoProduto = id
        if(!idNovoProduto){
            idNovoProduto = this.proximoId()
        } 
        let novoProduto = new Produto(idNovoProduto, nome, preco)
        this._produtos[novoProduto.id] = novoProduto
        return novoProduto
    }

    removerProduto(id){
        delete this._produtos[id]
    }

    getProdutos(){
        return this._produtos
    }

    getProduto(id){
        return this._produtos[id]
    }
}

module.exports = BancoTeste