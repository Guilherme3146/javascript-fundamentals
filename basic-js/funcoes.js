// function declaration
function main(nome, idade) {
  return { nome, idade };
}

// arrow function
const mainArrow =  (nome, idade) => {
  return { nome, idade };
}

const resultado = mainArrow("Ana", 30);

const nome = resultado.nome;
const idade = resultado.idade;

console.log(`Nome: ${nome}, Idade: ${idade}`);