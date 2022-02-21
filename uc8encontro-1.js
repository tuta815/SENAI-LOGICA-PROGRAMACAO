var listaDePecas = ["Amortecedor", "Motor", "Filtro de Ar"]

let peso = 50

if (peso < 100) {
    console.log("A peça deve ter no mínimo 100 gramas")
} else {
    console.log("A peça tem o peso adequado")
}

if (listaDePecas.length < 10) {
    console.log("É possível adicionar itens na lista")
} else {
    console.log("Número máximo de itens na lista = 10")
}

let nomePeca = "Disco de Freio"

if (nomePeca.length > 3) {
    console.log("Nome da peça esta adequado para o cadastro!")
} else if (nomePeca.length == 0) {
    console.log("O nome da peça não pode ser vazio.")
} else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")
}