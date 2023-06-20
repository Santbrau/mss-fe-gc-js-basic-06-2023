// 27. Crea un programa que solicite al usuario ingresar un número y luego calcule la suma de
// todos los números impares desde 1 hasta ese número utilizando un bucle `while` y una
// condición `if`

let numero = parseInt(prompt("Ingrese un número"));
let contador = 0;
let suma = 0;

while (contador <= numero) {
    if(contador % 2 != 0) {
        suma += contador;
    }
    contador++;
}

console.log (suma);