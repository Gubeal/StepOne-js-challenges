// Escreva uma função com o nome examResult que tenha note como argumento.

// Esse função vai verificar se o valor note é maior ou igual a 75, se for deve mostrar no console a seguinte frase: 

// "You passed the exam!"

// Se não, deve mostrar no console a seguinte frase:

// "You didn't passed the exam!"

function examResult(note) {
    const limitNote = 75;

    if (note >= limitNote) {
        return "You passed the exam!";
    } else {
        return "You didn't passed the exam!";
    }
}

console.log(examResult(74));
console.log(examResult(75));
console.log(examResult(76));