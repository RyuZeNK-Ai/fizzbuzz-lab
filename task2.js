// Imprime numeros de 1 a 105 con "Fizz" en lugar de múltiplos de 3
  for (let i = 1; i <= 105; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}