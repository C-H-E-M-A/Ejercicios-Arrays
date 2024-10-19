/*7. Todos los números son mayores que "n"
Dado un arreglo de números y un número n, usa every() para verificar si todos los
números son mayores que n.*/

let numeros=[5,6,8,2];
let numero=1;

function numeromayor(numero,numeros){
    let mayor=numeros.every(Element => numero>Element);
    console.log(mayor);
}
numeromayor(numero,numeros);