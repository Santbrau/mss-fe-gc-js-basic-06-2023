// 8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
// de ellos.

let numeroUno = prompt ("Ingrese un número");
let numeroDos = prompt ("Ingrese un segundo número");
let numeroTres = prompt ("Ingrese un tercer número");

if (numeroUno > numeroDos && numeroUno > numeroTres) {
    alert (numeroUno + " es el mayor de los tres números ingresados");
}
else if (numeroDos > numeroUno && numeroDos > numeroTres) {
    alert (numeroDos + " es el mayor de los tres números ingresados");
}
else {
    alert (numeroTres + " es el mayor de los tres números ingresados");
}