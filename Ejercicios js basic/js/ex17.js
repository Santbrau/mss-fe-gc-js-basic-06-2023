// 17. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde 2 hasta ese número utilizando un bucle `while`.

let numero = prompt("Ingrese un número");
let contadorPar = 2;

while (contadorPar <= numero) {
    if (contadorPar % 2 == 0) {
        console.log(contadorPar);
    }
contadorPar++;
}