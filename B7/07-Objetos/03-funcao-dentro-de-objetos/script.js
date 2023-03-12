let pessoa = {
    nome: 'André',
    sobrenome: 'Freitas',
    idade: 22,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nome + ' ' + pessoa.sobrenome)

console.log(pessoa.nomeCompleto())