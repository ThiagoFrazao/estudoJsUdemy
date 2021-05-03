const passo1 = (contexto,next) => {
    contexto.valor = 'middleware1'
    next()
}

const passo2 = (contexto,next) => {
    contexto.valor2 = 'middleware2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'middleware3'


let execute = (contexto, ...middlewares) => {
    const executePasso = indice => {
        //1º middlewares esta OK? 2º o indice atual e maior que o tamanho do array? 3º executa o proximo indice
        middlewares && indice < middlewares.length && middlewares[indice](contexto,() => executePasso(indice + 1))
    }
    //comeca com o passo 0
    executePasso(0)
}