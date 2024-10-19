//1. Ordenar alfabéticamente
//Dado un arreglo de strings, ordena el arreglo en orden alfabético

let cadena=["Perro", "Gato", "Pato", "Raton", "Ardilla", "Vaca"];

function alfabéticamente(){
    let nuevoorden=cadena.sort();
    return nuevoorden;
}
console.log(alfabéticamente(cadena))