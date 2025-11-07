// Imprime numeros de 1 a un límite dado con "Fizz" en lugar de múltiplos de 3, "Buzz" en lugar de múltiplos de 5
//  y "Woof" en lugar de múltiplos de 7
const prompt = require('prompt-sync')();

let resultados = [];

let limite;

while (true) {
    limite = parseInt(prompt("Ingrese hasta qué número desea generar (1 - 105): "));

    if (limite >= 1 && limite <= 105) {
        break;
    }

    console.log("❗ Por favor, ingresa un número entre 1 y 105.");
}

for (let i = 1; i <= limite; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (i % 7 === 0) output += "Woof";

    resultados.push(output || i);
}


console.log("\n📦 Resultados guardados en el arreglo:");
console.log(resultados);

console.log(`\n🔢 Total de elementos: ${resultados.length}`);