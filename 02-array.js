console.log("Desafio 02");
// 1- Crie um array vazio chamado animals
let animals = [];

// 2- Adicione nesse array dois animais: dog e cat (você pode fazer isso de mais de uma forma diferente!)
animals.push('dog', 'cat');
console.log(animals);

// 3- Adicione no começo do array outro animal: spider
animals.unshift('spider');
console.log(animals);

// 4- Remova o primeiro elemento do array
animals.shift();
console.log(animals);
// 5- Remova o último elemento do array
animals.pop();
console.log(animals);

// 6- Como ficou o array final?! E qual é o elemento 1 desse array?
console.log("O array final ficou assim: ");
console.log(animals);
console.log("O elemento 1 desse array é: " + animals[0]);