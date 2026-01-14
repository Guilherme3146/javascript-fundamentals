// 1. Guarde em uma variável se algum valor da lista "numeros" é par, e logue-a no console.

const numeros = [1, 2, 3, 4, 5, 6];

const algumNumeroEPar = numeros.some(numero => {
  // if (numero % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Mesma coisa que acima
  return numero % 2 === 0;
})

console.log(algumNumeroEPar); // true

// 2. Guarde uma variável se alguma pessoa da lista "pessoas" é maior de idade, e logue-a no console.

const pessoas = [
	{
		nome: "Ragnar Lothbrok",
		idade: 30,
	},
	{
		nome: "Harvey Specter",
		idade: 41,
	},
	{
		nome: "John Doe",
		idade: 12,
	},
];

const algumaPessoaEMaiorDeIdade = pessoas.some(pessoa => {
  // if (pessoa.idade >= 18) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Mesma coisa que acima
  return pessoa.idade >= 18; // Retorna true se a pessoa for maior de idade
});

console.log(algumaPessoaEMaiorDeIdade);

// 3. Guarde em uma variável se todos os valores da lista "numeros2" é par, e logue-a no console.

const numeros2 = [1, 2, 3, 4, 5, 6];

const todosNumerosSaoPares = numeros2.every(numero => {
   // if (numero % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Mesma coisa que acima
  return numero % 2 === 0;
});

console.log(todosNumerosSaoPares);

// 4. Guarde em uma variável se todos os itens da "listaDeDesejos" está em estoque (quantidadeEstoque maior que 0).

const listaDeDesejos = [
	{
		titulo: "Tesla Model S",
		quantidadeEstoque: 0,
	},
	{
		titulo: "MacBook Pro",
		quantidadeEstoque: 10,
	},
	{
		titulo: "Carro de Fórmula 1",
		quantidadeEstoque: 1,
	},
];

const todosOsItensEstaoEmEstoque = listaDeDesejos.every(item => {
  if (item.quantidadeEstoque > 0) {
    return true;
  } else {
    return false;
  }

    return item.quantidadeEstoque > 0;
});

console.log(todosOsItensEstaoEmEstoque);
