const pessoas = [
  { nome: 'Ana', idade: 22 },
  { nome: 'Bruno', idade: 35 },
  { nome: 'Carlos', idade: 30 },
  { nome: 'Diana', idade: 28 },
];

const ana = pessoas.find((item) => {  //find retorna sempre o primeiro se houver duas anas por exemplo vai retornar a primeira
    return item.nome === 'ana'
})

console.log(ana); // { nome: 'Ana', idade: 22 }

const anaIndex = pessoas.findIndex((item) => {
    return item.nome === 'ana';
})

console.log(anaIndex); // 0 o findIndex retorna o indice do elemento encontrado

//Exercicios

// 1. Encontre na lista abaixo o objeto que tenha o valor "Japan" como "pais", guarde-o em uma variável e logue-a no console.

const foguetes = [
  { pais: "Russia", lancamentos: 32 },
  { pais: "US", lancamentos: 23 },
  { pais: "China", lancamentos: 16 },
  { pais: "Europe", lancamentos: 7 },
  { pais: "India", lancamentos: 4 },
  { pais: "Japan", lancamentos: 3 }
]

const japan = foguetes.find((item) => {
  return item.pais === 'Japan';
});

console.log(japan); // { pais: "Japan", lancamentos: 3 }

// 2. Encontre, na lista abaixo, a posição que se encontra o item com o "titulo" igual a "Carro de Fórmula 1", guarde-a em uma variável e logue-a no console.

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

const f1Index = listaDeDesejos.findIndex((item) => {
  return item.titulo === "Carro de Fórmula 1"
});

console.log(f1Index); // 2