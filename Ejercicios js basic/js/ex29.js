// 29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre
// en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una
// condición `if` y una variable contador.

let palabra = prompt("Ingrese una palabra");
let contador = 0;

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ||
    letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
        contador++;
    }
}

console.log(contador);