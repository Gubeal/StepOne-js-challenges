// Utilizando o while, faça uma estrutura de repetição que dê o console dos números 50 a 100.
console.log("Números de 50 a 100:");
let step = 50;
while (step <= 100) {
    console.log(step);
    step++;
}
// Utilizando o while, faça uma estrutura de repetição que dê o console somente dos números pares, começando no 2 e indo até 100.
console.log("Números pares de 2 a 100:");
let number = 2;
while (number <= 100) {
    if (number % 2 == 0) {
        console.log(number);
    }
    number++;
}
console.log("Outra solução, pares de 2 a 100:");
number = 2;
while (number <= 100) {
    console.log(number);
    number += 2;
}
// Utilizando o while, faça uma estrutura de repetição que dê o console dos números 100 a 1.
console.log("Números de 100 a 1:");
let inverse = 100;
while (inverse >= 1) {
    console.log(inverse);
    inverse--;
}