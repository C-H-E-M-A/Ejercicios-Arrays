/*Algunos números son pares
Dado un arreglo de números, usa some() para verificar si al menos uno es par.
 */

let numeros=[4,6,2,8,3];

function pares(numeros){
   let numeropares=numeros.some(Element =>Element %2===0);
   console.log(numeropares);

}
pares(numeros);