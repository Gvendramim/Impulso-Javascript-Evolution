const prod1 = {} //{} para declarar um objeto [] para declarar um array
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)


console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())