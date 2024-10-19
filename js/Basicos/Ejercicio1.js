//Suma de los elementos de un arreglo
//Escribe una función que reciba un arreglo de números y retorne la suma de todos
//sus elementos.
let suma=[1,5,6];

function SumarArreglo(suma){
    let SumarArreglo=0;
    suma.forEach(ElementoArreglo => {
        SumarArreglo=SumarArreglo+ElementoArreglo;
    });
    return SumarArreglo;
}
console.log("La suma es de:"+SumarArreglo(suma));

