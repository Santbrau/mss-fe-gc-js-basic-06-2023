// 15. Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un
//     año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible
//     entre 400)

let año = prompt ("Ingrese un año para saber si es bisiesto");

if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    console.log(año + " es un año bisiesto");
} else {
    console.log(año + " no es un año bisiesto");
}