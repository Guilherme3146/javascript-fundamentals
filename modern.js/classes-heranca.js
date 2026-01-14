class Animal { // classe pai
    constructor(name) { // construtor da classe Animal
        this.name = name; // propriedade name
    }

    falar() {   // método falar da classe Animal
        console.log(`O ${this.name} falou`) // mensagem padrão
    }
}

class Cachorro extends Animal { // herança da classe Animal
    constructor(name) {   // construtor da classe Cachorro
        super(name); // chama o construtor da classe pai
    }

    falar() {
        console.log(`O ${this.name} latiu`); // sobrescreve o método falar da classe pai
    }
}

const animal = new Animal('chico'); // instancia a classe Animal
const cachorro = new Cachorro('chico'); // herda a classe Animal 

console.log(cachorro); // Cachorro { name: 'chico' }
cachorro.falar(); // O chico latiu
console.log(animal); // Animal { name: 'chico' }
animal.falar(); // O chico falou

// Exercício

// 1. Crie uma classe chamada "Guerreiro", que receba, em seu constructor, um "nome" e uma "idade", e que contenha um método chamado "lutar" que logue uma mensagem dizendo "O guerreiro {nome}, de {idade} anos está lutando!"

class Guerreiro {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    lutar() {
        console.log(`O guerreiro ${this.nome}, de ${this.idade} anos está lutando!`)
    }
}

const guerreiro = new Guerreiro('Guilherme', 22); // instancia a classe Guerreiro

guerreiro.lutar(); // O guerreiro Guilherme, de 22 anos está lutando!

// 2. Crie uma classe chamada "Viking", derivada da classe "Guerreiro" criada acima. Sobrescreva o método "lutar", que agora logará uma mensagem dizendo "O viking {nome}, de {idade} anos está lutando em nome de Odin!"
// 

class Viking extends Guerreiro {
    constructor(nome, idade) {
        super(nome, idade); // chama o construtor da classe pai
    }

    lutar() { // sobrescreve o método lutar da classe pai
        console.log(`O viking ${this.nome}, de ${this.idade} anos está lutando em nome de Odin!`)
    }

    lutarComMartelo() {
        console.log(`O viking ${this.nome}, de ${this.idade} anos está lutando com seu martelo no nome de Thor!`)
    }
}

const viking = new Viking('Guilherme', 22);
viking.lutar(); // O viking Guilherme, de 22 anos está lutando em nome de Odin!

viking.lutarComMartelo(); // O viking Guilherme, de 22 anos está lutando com seu martelo no nome de Thor!

// Crie também, na classe "Viking" um método chamado "lutarComMartelo", que logue uma mensagem dizendo "O viking {nome}, de {idade} anos está lutando com seu martelo no nome de Thor!"