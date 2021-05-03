const contador1 = require('./instanciaUnica')
const contador2 = require('./instanciaUnica')

const fabricaContador = require('./instanciaNova')
const contador3 = fabricaContador()
const contador4 = fabricaContador()

console.log(fabricaContador)

//como sao o mesmo objeto o contador 1 e 2 vao ser incrementados juntos
contador1.incrementarValor()
contador1.incrementarValor()
console.log(contador1.valor, contador2.valor)

//como sao criados a partir de uma Factory, os contadores 3 e 4 sao objetos diferentes
contador3.incrementarValor()
contador3.incrementarValor()
console.log(contador3.valor, contador4.valor)