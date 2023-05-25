function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Gabriel',
	idade: 21,
};

const pessoa2 = {
	nome: 'Julia',
	idade: 22,
};

const pessoa3 = {
	nome: 'Beatriz',
	idade: 13,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));