//Filtrar números pares
//Dado un arreglo de números, retorna solo los números pares usando filter().

var numeros=[5,4,9,6,3,10];
function pares(){
    var npares =numeros.filter(numeros=>numeros%2===0);
    return npares;
}
console.log(pares(numeros));