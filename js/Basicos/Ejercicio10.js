//. Multiplicar por 2
//Crea una función que multiplique cada número de un arreglo por 2 usando map().


let numero=[5,6,9,5];

function Multiplicar(){
    let Multiplicarn=numero.map(numero=>numero*2);
        return Multiplicarn;
    
}
console.log(Multiplicar(numero))