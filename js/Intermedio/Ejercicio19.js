/*Suma acumulada
Dado un arreglo de números, usa reduce() para retornar la suma acumulada de los
elementos.*/


let numeros=[1,6,120,5,8,10];

function suma(numeros){
    let sumanumeros=numeros.reduce((acumulador, contador) => contador+acumulador,0);
    console.log(sumanumeros)

}
suma(numeros);
