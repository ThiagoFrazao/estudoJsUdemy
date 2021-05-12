const fileSystem = require('fs')

const filePath = __dirname + '/testeArquivo.json'
//metodo sincrono
let conteudo = fileSystem.readFileSync(filePath, 'utf-8')

//console.log(conteudo)

//metodo assincrono - recebe caminho/charset/callback
//callback recebe - error(caso tenha dado erro na leitura)/ conteudo(caso a leitura tenha sido)
fileSystem.readFile(filePath, 'utf-8', (error, conteudo) => {
    file = conteudo
    console.log(file)
})