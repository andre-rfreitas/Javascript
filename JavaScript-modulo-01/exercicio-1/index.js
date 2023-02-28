const nome = prompt("Digite o nome:");
const sobrenome = prompt("Digite o sobrenome:");
const campoDeEstudo = prompt("Digite o campo de estudo:");
const anoNasc = prompt("Digite o ano de nascimento:");

alert(
  "Recruta Cadastrado com sucesso!" +
    "\nNome completo: " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    (2023 - anoNasc)
);
