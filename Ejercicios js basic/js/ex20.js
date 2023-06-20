// 20. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde ese número hasta 0 utilizando un bucle `while`.

let i = prompt ("Ingrese un número");

for ( i; i >= 0; i-- ) {
    if ( i % 2 == 0 ) {
    console.log( i );
    }
}