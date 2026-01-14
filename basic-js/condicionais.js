//Condições

//&& (E lógico) e || (OU lógico)

const sum1 = 1 + 1;

const sum2 = 2 + 2;

if (sum1 === 2 && sum2 === 4) {
  console.log("As duas condições são verdadeiras");
} else if (sum1 === 2 || sum2 === 5) {
  console.log("Uma das condições é verdadeira");
} else {
  console.log("Nenhuma das condições é verdadeira");
}

let number = sum1 == 2 ? 2 : 4; // operador ternário

console.log(number); // saída: 2

// switch case

const fruit = "Maçã";  

switch (fruit) {
  case "Banana":
    console.log("A fruta é Banana");    
    break;
  case "Maçã":
    console.log("A fruta é Maçã");
    break;
  case "Laranja":
    console.log("A fruta é Laranja");
    break;
}