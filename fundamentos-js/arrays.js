const valores = [7.7, 8.9, 6.3, 9.2] // conjunto de valores [] para declarar um array 
/* Arrays são geralmente descritas como "lista de objetos"; 
Elas são basicamente objetos que contem múltiplos valores armazenados em uma lista. */
console.log(valores[0], valores[3])
console.log(valores[4]) // nesse caso apresenta um valor indefinido 

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // retira o ultimo valor do array 
delete valores[0] // deleta valores
console.log(valores)

console.log(typeof valores) // mostra o tipo 


// meu teste

const valores = [7.7, 8.5, 6.3, 9.2] // isso é uma array
console.log (valores[3]) // mostra os valores dentro de um array ([..])


valores [4] = 10 // adiciona um valor dentro do array
console.log(valores[4])
console.log(valores.length) // verificar..

valores.push({id: 3}, false, null, 'test') /* adiciona um ou mais elementos no fim de 
um array e retorna o comprimento resultante do array */
console.log(valores)
