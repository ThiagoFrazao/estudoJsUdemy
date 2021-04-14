// Axios é um pacote HTTP Cliente
const axios = require('axios')
const urlJson = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

//Funcoes para filtrar
const isChines = filtro => filtro.pais === 'China'
const isMulher = filtro => filtro.genero === 'F'

//Funcao para Reduce
const reducMenorSalario = (funcionario, menorAtual) => {
    if(funcionario.salario < menorAtual.salario){
        return funcionario
    } else {
        return menorAtual
    }
}


axios.get(urlJson).then(response => {
    const funcionarios = response.data

    //mulher chinesa com menor salario
    const menorSalario = funcionarios
        .filter(isChines)
        .filter(isMulher)
        .reduce(reducMenorSalario)
    
    console.log(menorSalario)
})

