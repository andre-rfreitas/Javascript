// 1. No array abaixo, qual o número que pega a Ferrari?
let cars = ['Bmw', 'Ferrari', 'Mercedes']
console.log('1. ' + cars[1])

//2. Troque a Ferrari por Audi
// cars.splice(1, 1, "Audi")
cars[1] = 'Audi'
console.log('2. Lista com Audi: ')
console.log(cars)

// 3. Adicione o Volvo a lista
cars.push('Volvo')
console.log('2. Lista com Volvo: ')
console.log(cars)

//4. Exiba quantos items tem no array
console.log('4. itens no array: ')
console.log(cars.length)