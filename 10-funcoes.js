// Crie uma função que calcule a área do retângulo. 
// O nome da função deve ser rectangleArea, 
// que recebe como parâmetro dois valores, seu comprimento length e sua largura width.

// A função deve mostrar no console a área do retângulo com a seguinte frase:
// The area of rectangle is XXX.

function rectangleArea(length, width) {
    let area = length * width;
    console.log(`The area of rectangle is ${area}.`);
}

console.log('Rectangle area of 10 and 20:');
rectangleArea(10, 20);