// 33. Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la
// consola la palabra invertida utilizando un bucle `while`, una condición `if` y una variable
// acumuladora.

let palabra = prompt("Ingrese una palabra");
let longitudPalabra = palabra.length;
let palabraInvertida = "";

while (longitudPalabra > 0) {
    palabraInvertida += palabra[longitudPalabra - 1];
    longitudPalabra--;
}

console.log(palabraInvertida);
