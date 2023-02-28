const vehicleName1 = prompt("Digite o nome do veículo:")
const vehicleSpeed1 = prompt("Digite a velocidade do veículo:")
const vehicleName2 = prompt("Digite o nome do veículo:")
const vehicleSpeed2 = prompt("Digite a velocidade do veículo:")

if (vehicleSpeed1 > vehicleSpeed2) {
    alert(`${vehicleName1} é mais rápido!`)
} else if (vehicleSpeed2 > vehicleSpeed1) {
    alert( vehicleName2 + " é mais rápido!")
} else {
    alert("A velocidade dos veículos é a mesma!")
}