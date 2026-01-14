//map: o map cria um novo array a partir de um array existente, aplicando uma função a cada elemento do array original.

const ages = [20, 30, 12, 45, 32, 34];

const agesIn2026 = ages.map((age) => {
  return age + 1;
});

console.log(agesIn2026);

//reduce: o reduce reduz um array a um único valor, aplicando uma função acumuladora a cada elemento do array.
const sumOfAges = ages.reduce((age, sumAge) => {
  return age + sumAge;
}, 0);

console.log(sumOfAges);


//filter: o filter cria um novo array contendo apenas os elementos que atendem a uma determinada condição.

const nomes = ["Ana", "Bia", "Carlos", "Daniel"];

const firstLetterName = nomes.filter((nome) => {
  return nome.startsWith("A");
});

console.log(firstLetterName);

