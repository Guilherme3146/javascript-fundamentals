const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  hobbies: ["reading", "traveling", "swimming"],
  animal: {
    type: "dog",
    name: "Buddy",
    age: 5
  }
};  

// const firstName = person.name;
// const age = person.age;
// const city = person.city;
// const hobbies = person.hobbies;

//mesma coisa que o código acima
const { name: nome, age, city, hobbies, animal: { type, name, age: animalAge } } = person; // separando os valores do objeto em variáveis


const hobby = person.hobbies[2];

console.log(hobby);

console.log(person.animal.age)
console.log(animalAge);

//Objeto dentro de objeto

const Todos = [
    {
        id: 1,
        task: "Treinar JavaScript",
        isCompleted: true,
    },
    {
        id: 2,
        task: "Estudar React",
        isCompleted: false,
    },
    {
        id: 3,
        task: "Fazer exercícios",
        isCompleted: false,
    }
];

const toDoTask = Todos[2].task; // Acessando a tarefa do terceiro objeto na array Todos

console.log(toDoTask);