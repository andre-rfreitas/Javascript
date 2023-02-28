const characterName1 = prompt("Digite o nome do personagem:")
const characterPower1 = prompt("Digite o pode de ataque do personagem:")

const characterName2 = prompt("Digite o nome de outro personagem:")
let characterHealth2 = prompt("Digite os pontos de vida do segundo personagem:")
const characterDefense2 = prompt("Digite o poder de defesa do segundo personagem:")
const characterShield2 = prompt("O segundo personagem possui um escudo? (Sim/Não)")

let damage = 0

if (characterPower1 > characterDefense2 && characterShield2 === "Não") {
    damage = characterPower1 - characterDefense2
} else if (characterPower1 > characterDefense2 && characterShield2 === "Sim") {
    damage =(characterPower1 - characterDefense2) / 2
}

characterHealth2 -= damage

alert(characterName2 + " causou " + damage + " pontos de dano em " + characterName2)
alert(
    characterName1 + "\nPoder de ataque: " + characterPower1 + "\n\n" +
    characterName2 = "\nPontos de vida: " + characterHealth2 +
    "\nPoder de defesa: " + characterDefense2 + "/nPossui escudo: " + characterShield2
)




