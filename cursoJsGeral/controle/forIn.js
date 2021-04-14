let array = [2,3,5,8,9,10,14,15,18,20,41]

for(nota in array){
    console.log(nota,array[nota])
}

let pessoa = {nome:'Thiago',idade:27,cidade:'Nova Iguaçu'}

for(atr in pessoa){
    console.log(`${atr} = ${pessoa[atr]}`)
}