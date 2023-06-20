// 10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del
//     1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1
//     corresponde a "Lunes", 2 corresponde a "Martes", etc.)

let diaSemana = prompt ("Ingrese numéricamente el dia de la semana del 1 al 7");

switch (diaSemana) {
    case "1":
        console.log ("Hoy es Lunes, buena suerte...")
        break;
    case "2":
        console.log ("Hoy es Martes, almenos no es Lunes...")
        break;
    case "3":
        console.log ("Hoy es Miércoles ¡ya falta menos!")
        break;
    case "4":
        console.log ("Hoy es Jueves, dicen que son los nuevos viernes")
        break;
    case "5":
        console.log ("Hoy es Viernes, gracias a Dios")
        break;
    case "6":
        console.log ("Hoy es Sábado ¡disfruta!")
        break;
    case "7":
        console.log ("Hoy es Domingo, mañana vuelve a ser Lunes...")
        break;
    default:
        console.log ("Ingrese un número válido y vuelva a intentarlo")
        break;
}