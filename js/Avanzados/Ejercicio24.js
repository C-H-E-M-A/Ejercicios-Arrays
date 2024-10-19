/* Reemplazar valores en un arreglo
Dado un arreglo de números, usa map() para reemplazar cada número negativo con
su valor absoluto.*/


let numeros=[2,4,5,-8,2,-9];

function reemplazar(numeros){
    let cambiar=numeros.map(numeros=>Math.abs(numeros));
    console.log(cambiar);
}
reemplazar(numeros)