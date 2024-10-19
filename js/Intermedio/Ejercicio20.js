/*Producto de todos los elementos
Escribe una función que reciba un arreglo de números y use reduce() para calcular
el producto de todos los números. */


let numeros=[1,5,9,8,6,2];

function producto(numeros){
    let suma=numeros.reduce((Acumulador, contador )=> Acumulador*contador);
    console.log(suma)
}
producto(numeros);