// 25. Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola cada
// palabra de la frase en una línea diferente utilizando un bucle `for...of`

let frase = prompt ("Ingrese una frase");
let palabras = frase.split (" ");

for (let palabra of palabras) {
    console.log(palabra);
}