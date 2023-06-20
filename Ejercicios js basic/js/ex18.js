// 18. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los números naturales hasta ese número utilizando un bucle `do...while`.

let numero = prompt("Ingrese un número");
let suma = 0;
let contador = 1;

do {
    suma += contador;
    contador++;
} while (contador <= numero);

console.log(suma);