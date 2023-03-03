function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

// dobro(5)
// dobro(7)

// dobro()

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!")
}

// dizerOla("André")
// dizerOla()

function soma(a, b, c, d, e) {
    alert("O resultado da soma é " + (a + b + c + d + e))
}

// soma(7, 6, 4, 1, 9)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

function novoUsuario(nome, tipo = "admin", email, senha) {
    const usuario = {
        nome, // mesmo que nome: nome
        email,
        senha,
        tipo
    }

    console.log(usuario)
}    

// criarUsuario("André", "andre@email.com", "1234")
// novoUsuario("André", "andre@email.com", "1234")

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {

}

function objetoComoParametro(usuario) {
    usuario.nome
    usuario.email
}

muitosParametros("nome", "telefone", ...)

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComoParametro(dadosDoUsuario)