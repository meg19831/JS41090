/* //Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
//Función que muestra resultado por consola
function mostrar() {
    console.log(resultado)
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            
mostrar(resultado); */



function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);


console.log(resultado)  // ⇒ 13

//operacion calculadora
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*"));

