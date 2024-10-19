/*Combina varios arreglos y ordena
Dado varios arreglos de números, combínalos todos en un solo arreglo y ordénalo de
menor a mayor*/


let num1=[1,6,9,2];
let num2=[8,3,10,5];

function ordem(num1,num2){
    let nuevo=num1.concat(num2);
    let ultimo=nuevo.sort((a,b)=> b-a)
    console.log(ultimo)
}
ordem(num1,num2)