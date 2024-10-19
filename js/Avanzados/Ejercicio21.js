/*Crear un arreglo a partir de un string
Escribe una función que reciba una cadena de texto y la convierta en un arreglo de
palabras.
 */


let cadena="Hola mundo Bienvenido a ejemplos avanzados en javascript";

function convertir(cadena){
    let arr=cadena.split(" ");
    console.log(arr);
}
convertir(cadena);