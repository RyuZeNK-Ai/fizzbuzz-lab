// Imprime numeros de 1 a 105 con "Fizz" en lugar de múltiplos de 3 y "Buzz" en lugar de múltiplos de 5
for (let i = 1; i <= 105; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}