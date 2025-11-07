// Imprime numeros de 1 a 105 con "Fizz" en lugar de múltiplos de 3 y "Buzz" en lugar de múltiplos de 5
//  y "Woof" en lugar de múltiplos de 7
for (let i = 1; i <= 105; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (i % 7 === 0) output += "Woof";

    console.log(output || i);
}