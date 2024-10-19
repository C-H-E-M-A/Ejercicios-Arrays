//Ordenar números
//Dado un arreglo de números, ordénalo de menor a mayor.

let numeros=[6,5,8,4,2,3,9];

//numeros.sort((a,b)=> a - b);
//console.log(numeros);

function mayormenor(numeros){
    let nuevo=numeros.sort((a,b)=> b-a)
    console.log(nuevo)
}
mayormenor(numeros);
