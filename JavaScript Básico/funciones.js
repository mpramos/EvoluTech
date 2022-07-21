console.log(cuadrado(3))
function saludar() {
    console.log("Hola desarrolladores ")
}
function cuadrado(numero) {
    return numero*numero
}
let cuadrados=function (numero) {
    return numero*numero
}
console.log(cuadrados(4))
//! SCOPE
//! Ejemplo de scope global
var nombre="Maria"
decirHola();
console.log(nombre)
function decirHola() {
    console.log("Hola"+nombre)
}
//!Ejemplo de scope local
//? function decirHola() {
//?     nombre="Cody"
//?     console.log("Hola"+nombre)
//? }