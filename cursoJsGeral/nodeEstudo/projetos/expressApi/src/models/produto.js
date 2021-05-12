class Produto{
    constructor(id,nome,preco){
        this._id = id
        this._nome = nome
        this._preco = preco
    }
    get id(){
        return this._id
    }

    get nome(){
        return this._nome
    }

    get preco(){
        return this._preco
    }

    set nome(novoNome){
        this._nome = novoNome
    }

    set preco(novoPreco){
        this._preco = novoPreco
    }
}

module.exports = Produto