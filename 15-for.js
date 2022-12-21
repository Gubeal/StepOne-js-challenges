// Utilizando o for, faça uma estrutura de repetição que dê o console dos números 50 a 100.
console.log("Números de 50 a 100:")
for (let i = 50; i <= 100; i++) {
    console.log(i);
}
// Utilizando o for, faça uma estrutura de repetição que dê o console somente dos números pares, começando no 2 e indo até 100.
console.log("Pares de 2 a 100:");
for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("Outra solução, pares de 2 a 100:");
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}
// Utilizando o for, faça uma estrutura de repetição que dê o console dos números 100 a 1.
console.log("Números de 100 a 1:")
for (let i = 100; i >= 1; i--) {
    console.log(i);
}