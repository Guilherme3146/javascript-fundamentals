// O map ele é utilizado para transformar os itens de um array em um novo array, aplicando uma função a cada item do array original.

const numeros = [1, 2, 3, 4, 5];

const numerosMultiplicadospor2 = numeros.map((item) => { // arrow function com múltiplas linhas
    return item * 2; // retorno explícito
})

console.log(numerosMultiplicadospor2); // [2, 4, 6, 8, 10]

const usuarios = [
    {
        nome: 'Guilherme',
        idade: 22,
    },
    {
        nome: 'João',
        idade: 22,
    },
    {
        nome: 'Felipe',
        idade: 22,
    },
]

const idadeMulti2 = usuarios.map((item, index) => {
    return {...item, idade: item.idade * 2};
})

console.log(idadeMulti2); // [{nome: 'Guilherme', idade: 44}, {nome: 'João', idade: 44}, {nome: 'Felipe', idade: 44}]

//Exercicios

// 1. Utilizando o .map, crie uma lista que contenha todos os valores da lista "numeros" multiplicados por dois, e logue-a no console.

const number = [10, 20, 30, 40, 50];

const numberMulti2 = number.map((item) =>{
    return item * 2;
})

console.log(numberMulti2) // [20, 40, 60, 80, 100]

// 2. Crie uma lista, usando o .map, baseando-se na lista "usuarios", que contenha a "idade" de cada usuário multiplicada por 2.

const users = [
  { nome: 'John', idade: 20 },
  { nome: 'Jane', idade: 27 }, 
  { nome: 'Doe', idade: 18} 
]

const usersAgeMulti2 = users.map((item) => {
    return {...item, idade: item.idade * 2}
})

console.log(usersAgeMulti2) // [{ nome: 'John', idade: 40 }, { nome: 'Jane', idade: 54 }, { nome: 'Doe', idade: 36 }]

// 3. Crie uma lista de strings, baseando-se na lista "pessoas", que diga se a pessoa pode ir ou não para a Matrix. Para ir, ela precisa der uma idade maior que 18.

const pessoas = [
    {
        nome: "Angelina Jolie",
        idade: 80
    },
    {
        nome: "Eric Jones",
        idade: 2
    },
    {
        nome: "Paris Hilton",
        idade: 5
    },
    {
        nome: "Kayne West",
        idade: 16
    },
    {
        nome: "Bob Ziroll",
        idade: 100
    }
]

const pessoasMatrix = pessoas.map((item) => {
    const matrix = item.idade > 18 ? `${item.nome} pode ir para a matrix` : `${item.nome} não tem a idade mínima!`
    return matrix;
})

console.log(pessoasMatrix);

// Exemplo: 
// ["Angelina Jolie pode ir para Matrix!", 
// "Eric Jones não tem a idade mínima!", 
// "Paris Hilton não tem a idade mínima!", 
// "Kayne West não tem a idade mínima!", 
// "Bob Ziroll pode ir para Matrix!"]