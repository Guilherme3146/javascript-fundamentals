// for (let poze = 0; poze <= 10; poze++) { //laço de repetição que inicia em 0 e vai até 10
//     console.log(`Número: ${poze}`);
// }

// const marcas = ['Nike', 'Adidas', 'Puma', 'Reebok'];

// for (let i = 0; i < marcas.length; i++) {
//     console.log(`Marca: ${marcas[i]}`); // acessando cada elemento do array
// }

// for (let marca of marcas) {
//     console.log(`Marca: ${marca}`); // acessando cada elemento do array
// }

// marcas.forEach((marca, index) => {
//     console.log(`Marca ${[index]}: ${marca}`); // acessando cada elemento do array com forEach
// });

// While loop

let count = 0;

while (count < 5) {
  // laço de repetição que continua enquanto a condição for verdadeira
  console.log(`Contagem: ${count}`);
  count++;
}

// for in

const pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
};

for (let property in pessoa) {
  console.log(pessoa[property]); // acessando cada propriedade do objeto
}
