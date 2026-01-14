const names = ['João', 'Maria', 'Pedro', 10, true];

names.push('Ana'); //adiciona um novo elemento no final do array

names.unshift('Luiza'); //adiciona um novo elemento no início do array

names.pop(); //remove o último elemento do array

names.shift(); //remove o primeiro elemento do array

names[3] = 'Carlos'; //altera o valor do índice 3

console.log(names.indexOf("Carlos")); //retorna o índice do elemento "Carlos"

console.log(names);

names.map((name) => console.log(name)); //itera sobre cada elemento do array
