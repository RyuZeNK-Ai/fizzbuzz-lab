// FizzBuzzWoof con reemplazo de números primos
const prompt = require('prompt-sync')();

// Palabras para reemplazar números primos
let buzzWords = ["Fizz", "Buzz", "Woof", "Bark", "Awoo", "Bang"];

let resultados = [];

let limite;

while (true) {
    limite = parseInt(prompt("Ingrese hasta qué número desea generar (1 - 105): "));

    if (limite >= 1 && limite <= 105) {
        break;
    }

    console.log("❗ Ingrese un número válido entre 1 y 105.");
}

for (let i = 1; i <= limite; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (i % 7 === 0) output += "Woof";

    resultados.push(output || i);
}

//  Aqui reemplazamos números primos por palabras
function esPrimo(num) {
    if (num < 2) return false;
    for (let j = 2; j < num; j++) {
        if (num % j === 0) return false;
    }
    return true;
}

for (let i = 0; i < resultados.length; i++) {
    if (typeof resultados[i] === "number" && esPrimo(resultados[i])) {
        // Elegimos la palabra según el número
        let palabra = buzzWords[resultados[i] % buzzWords.length];
        resultados[i] = palabra;
    }
}

// Mostrar el arreglo final
console.log("\n🎉 Resultados finales:");
console.log(resultados);

console.log(`\n🔢 Total de elementos: ${resultados.length}`);
