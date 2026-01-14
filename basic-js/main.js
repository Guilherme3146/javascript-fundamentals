class Jogos { // Classe é um molde para criar objetos
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }

  getFullName() {
    console.log(`A nota do jogo ${this.nome} é ${this.nota}`)
  }

  speak() {
    console.log(`O ${this.nome} é díficil!`)
  }
}

class Soulslike extends Jogos { // Essa classe herda da classe Jogos
  constructor(nome, nota) {
    super(nome, nota);
  }
}

const soulslike = new Soulslike("Demons Souls", "4 estrelas")

const publisher = new Jogos("Elden Ring", "5 estrelas");


publisher.getFullName();
soulslike.getFullName();

publisher.speak();
soulslike.speak();