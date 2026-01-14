function Somar (a, b) { // função tradicional
    return a + b;
}

const SomarArrow = (a, b) => a + b; // arrow function com retorno implícito

console.log(Somar(2, 3));
console.log(SomarArrow(2, 3));

function VerficarPositivo (numero) {
    return numero >= 0; 
}

const VerficarPositivoArrow = numero => numero >= 0; // arrow function com um parâmetro

console.log(VerficarPositivo(-1));
console.log(VerficarPositivoArrow(-1));

function Usuario() {
    return {
        nome: 'Guilherme',
        idade: 22
    };
}

const UsuarioArrow = () => ({ // arrow function retornando um objeto, o parenteses seria a mesma coisa que usar return
    nome: 'Guilherme',
    idade: 22
});