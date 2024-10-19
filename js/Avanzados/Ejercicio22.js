/*Eliminar falsy values
Dado un arreglo que contiene valores truthy y falsy, elimina todos los valores falsy
usando filter().*/


let cadena=["Hola", NaN ,0,"",null,"mundo" ,undefined];

function filtrocadena(cadena){
    let nuevo=cadena.filter(Boolean);
    console.log(nuevo);
}
filtrocadena(cadena);