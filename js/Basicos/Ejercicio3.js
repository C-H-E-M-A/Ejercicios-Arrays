//3. Promedio de números
//Dado un arreglo de números, crea una función que calcule y retorne el promedio de
//esos números.

let suma=[1,5,6];

function SumarArreglo(suma){
    let SumarArreglo=0;
    let calificacion=0;
    suma.forEach(ElementoArreglo => {
        SumarArreglo=SumarArreglo+ElementoArreglo;
        calificacion=SumarArreglo/suma.length;
    });

    return calificacion;
}
console.log("La suma es de:"+SumarArreglo(suma));