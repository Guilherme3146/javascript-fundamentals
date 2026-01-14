// const numeros = [0, 1, 2, 3]

// const [primeiro, segundo, terceiro, quarto] = numeros; // destructuring é uma forma de extrair valores de arrays ou objetos

// const primeiro = numeros[0];
// const segundo = numeros[1];
// const terceiro = numeros[2];
// const quarto = numeros[3];

// let a = 2;
// let b = 3;

// [a, b] = [b, a]; // troca os valores de a e b

// const numeros2 = [0, 1, 2];

// const numeros3 = [...numeros2, 3, 4, 5]; // spread operator é usado para expandir elementos de um array

// console.log(numeros3); // [0, 1, 2, 3, 4, 5]

// const [dez, vinte, trinta, ...resto] = [10, 20, 30, 40, 50]; // valores padrão em destructuring

// console.log(dez); // 10
// console.log(vinte); // 20
// console.log(trinta); // 30
// console.log(resto); // [40, 50]

// Exercício

// 1. Assinale uma variável pra cada valor na lista "numeros" utilizando Destructuring, e logue-as no console.

const numeros = [1, 2, 3, 4, 5];

const [primeiro, segundo, terceiro, quarto, quinto] = numeros;

console.log(primeiro, segundo, terceiro, quarto, quinto);

// 2. Inverta os valores das variáveis "a" e "b". Transforme o valor da variável "a" no valor da variável "b" e vice-versa, e logue-as no console.

let a = 5;
let b = 10;

[a, b] = [b, a]

console.log(a, b);

// 3. Crie uma nova lista baseando-se na "melhoresSeriesDoMundo" adicionando dois novos valores a ela utilizando o Spread Operator, e logue-a no console.

const melhoresSeriesDoMundo = ['GOT', 'Breaking Bad', 'Vikings'];

const newMelhoresSeriesDoMundo = [...melhoresSeriesDoMundo, 'ST', 'Dark'];

console.log(newMelhoresSeriesDoMundo);

// 4. Assinale os dois primeiros valores da lista "sobremesas" a duas variáveis, e distribua o restante em apenas uma, utilizando o Spread Operator, e logue-as no console.

const sobremesas = ['Sorvete', 'Petit Gateau', 'Açai', 'Pudim', 'Mousse de Maracujá'];

const [sorv, petit, ...resto] = ['Sorvete', 'Petit Gateau', 'Açai', 'Pudim', 'Mousse de Maracujá'];

console.log(sorv, petit, resto);