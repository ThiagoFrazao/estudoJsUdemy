let array = [1,2,3,4,5,6,7,8,9,10,11]

console.log('break')
for(num in array){
    if(num == 5){
        break
    }
    console.log(`${num} = ${array[num]}`)
}

console.log('continue')
for(num in array){
    if(num == 5){
        continue
    }
    console.log(`${num} = ${array[num]}`)
}