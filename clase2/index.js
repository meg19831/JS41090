
let entrada = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");

alert ( `su nombre completo es` + " " +  entrada + " " + apellido);
let jugadores = alert ("Nos dividiremos en grupos para poder armar los grupos");
let edad = prompt ("Ingrese su edad");

if (edad <=14) {
    alert("Eres menor de edad para participar de este juego");
}if (edad >= 15 && edad <=20 ) {
    alert("formaras parte del equipo rojo");
} if(edad >= 21 && edad <=26 ) {
    alert ("formaras parte del equipo azul");
} if (edad >= 27 && edad <=31 ) {
    alert ("formaras parte del equipo verde");
}else if (edad >= 32) {
    alert ("Eres mayor de la edad permitida para este juego, paticiparas en la siguiente ronda");
}
