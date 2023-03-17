/*
document.getElementsByTagName("h1")
document.getElementById("teste")
document.getElementsByClassName("botao")
document.querySelector("#teste")
document.querySelectorAll("#teste ul li")
*/

function clicou() {
    alert("Clicou no botão")
}

let botao = document.querySelector(".botao")
botao.addEventListener("click", clicou)