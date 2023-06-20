// 21. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// multiplicación de todos los números enteros positivos menores o iguales a ese número
// utilizando un bucle `do...while`.

let numero = prompt ( "Ingrese un número" );
contador = 1;
multiplicacion = 1;

do {
multiplicacion *= contador;
contador++;
} while ( contador <= numero );

console.log ( multiplicacion );