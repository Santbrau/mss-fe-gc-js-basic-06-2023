// 9. Escribe un programa que solicite al usuario ingresar un número y determine si es positivo,
// negativo o cero.

let numero = prompt ("Ingrese un número");

if (numero > 0) {
    alert (numero + " es un número positivo");
}
else if (numero == 0) {
    alert (numero + " es, evidentemente, un 0");
}
else {
    alert (numero + " es un número negativo");
}