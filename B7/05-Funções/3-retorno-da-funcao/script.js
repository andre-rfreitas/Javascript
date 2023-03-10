function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

let completo = nomeCompleto("André", "Freitas")
console.log(completo)

console.log(nomeCompleto("André", "Freitas"))

// ENTRADA -> PROCESSAMENTO -> SAÍDA

// RETORNO CONDICIONAL
function palmeirense(time) {
    if(time === "Palmeiras") {
        return true
    } else {
        return false
    }
}

let verificacao = palmeirense("Palmeiras")
console.log(verificacao)