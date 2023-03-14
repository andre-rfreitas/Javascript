// let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana']

// fruits.sort() // ordem alfabetica
// fruits.reverse()

// console.log(fruits)

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

cars.sort((a, b) => b.year - a.year)

console.log(cars)