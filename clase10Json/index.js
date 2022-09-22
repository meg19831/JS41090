const nombres = []

let otroNombre = prompt ("que otro nombre desea ingresar")

array.push(otroNombre)
const nuevoNombre = JSON.stringify(nombres)

localStorage.setItem ("nuevoIngreso", otroNombre);

const otroArray =JSON.parse(localStorage.getItem ("array"))
console.log(otroArray);





/* const array = [];
let pregunta = prompt("Metele algo")
array.push(pregunta)

const otro = JSON.stringify(array)

console.log(otro)

localStorage.setItem("arreglo", otro);

const arrayVuelta = JSON.parse(localStorage.getItem("array"))

console.log(arrayVuelta)
 */



