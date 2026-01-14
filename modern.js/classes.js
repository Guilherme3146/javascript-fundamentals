// const usuario = {
//   name: 'Jane Doe',
//   age: 28,
//   login() {
//     console.log(`Usuário ${this.name} logado`);
//   },
//   logout() {
//     console.log(`Usuário ${this.name} deslogado`);
//   }
// }

class Usuario { // definição da classe Usuario
    constructor(nome) { // método construtor
        this.nome = nome; // propriedade nome
    }

    static SayHello() { // método estático pode ser chamado sem instanciar a classe
        console.log('Hello!');
    }

    login() {
        console.log(`Usuário ${this.nome} logado`);
    }

    logout() {
        console.log(`Usuário ${this.nome} deslogado`);
    }
}   

const usuario = new Usuario('João'); // retorna um objeto da classe Usuario
const usuario2 = new Usuario('Joana'); // retorna um objeto da classe Usuario

console.log(usuario.nome);  // 'João'
console.log(usuario2.nome); // 'Joana'