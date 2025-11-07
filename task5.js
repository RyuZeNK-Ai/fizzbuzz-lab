const prompt = require('prompt-sync')();
// Solicitar al usuario un número límite entre 1 y 105
let limite;

while (true) {
    limite = parseInt(prompt("Ingrese hasta qué número desea generar (1 - 105): "));

    if (limite >= 1 && limite <= 105) {
        break;
    }

    console.log("❗ Por favor, ingresa un número entre 1 y 105.");
}
// Imprimir secuencia con Fizz, Buzz y Woof
for (let i = 1; i <= limite; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (i % 7 === 0) output += "Woof";

    console.log(output || i);
}