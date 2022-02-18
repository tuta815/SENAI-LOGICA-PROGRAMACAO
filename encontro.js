console.log("Bem vindo!")

var numeroParticipantes = 0
var participantes = ["Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José", "Helena", "Chico", "Mário", "José"]
const dataEvento = new Date('2022-07-07')
let idade = 18

const now = new Date(); // Data de hoje
const diff = Math.abs(dataEvento.getTime() - now.getTime()); // Subtrai uma data pela outra
const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

if (days > 0) {
    console.log("Evento permitido")
} else {
    console.log("Cadastro não permitido devido data inválida.")
}

if (idade >= 18) {
    console.log("Cadastro permitido")
} else {
    console.log("Cadastro não permitido para menores de 18 anos")
}

for (let i = 0; i < participantes.length; i++) {
    console.log(participantes[i])
    numeroParticipantes++
}
console.log(numeroParticipantes)

if (numeroParticipantes < 100) {
    console.log("Cadastro permitido")
} else {
    console.log("Cadastro não permitido pois foi excedido o limite de pessoas")
}