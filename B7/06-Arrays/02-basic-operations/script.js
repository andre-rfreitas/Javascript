let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'açucar'
]

ingredientes.push('chocolate') //add no fim
ingredientes.pop() // remove no fim
ingredientes.shift() //remove o primeiro

console.log(ingredientes)

console.log(`Total de ingredientes: ${ingredientes.length}`)