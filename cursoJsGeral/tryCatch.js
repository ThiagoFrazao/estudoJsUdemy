
function imprimirNomeGritando(pessoa){
    try{
        console.log(pessoa.nome.toUpperCase() + '!!!!')
    } catch(exp){
        console.log(`Foi pego um erro : ${exp.msg}! A pessoa informada nao possui nome.`)
    } finally {
        console.log(`A funcao imprimirNomeGritando foi executada.`)
    }
}

let pessoa = {nome:'Thiago',idade:27}
let pessoa2 = {idade:22}
imprimirNomeGritando(pessoa2)