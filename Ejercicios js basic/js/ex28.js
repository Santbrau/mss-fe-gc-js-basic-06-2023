// 28. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un
// contador de divisores.

let numero = parseInt(prompt("Ingrese un número"));
let booleano = true;

for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
    booleano = false;
    }
}

if (booleano) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}

