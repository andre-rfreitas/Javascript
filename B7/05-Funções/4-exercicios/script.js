/*
Calcule a porcentagem entre 2 números.
Exemplo 25% de 40 é 10
Fórmula da porcentagem: (y/x) * 100
Uso da função:

let x = 40
let y = 10
let pct = calcPct(x, y)
console.log(`${pct}% de ${x} é ${y}`)
*/

function calcPct(x, y) {
  return (y / x) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

/*
Calcule o preço do imóvel
- m2 = 3000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
*/

function calcularImovel(metragem, quartos) {
  let m2 = 3000;
  let preco = 0;

  switch (quartos) {
    case 1:
    default:
      preco = metragem * n2;
      break;
    case 2:
      preco = metragem * (n2 + 1.2);
      break;
    case 3:
      preco = metragem * (n2 * 1.5);
      break;
  }

  return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa ${preco}`);
