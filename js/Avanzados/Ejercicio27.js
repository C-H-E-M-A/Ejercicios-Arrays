/* Contar ocurrencias de un valor
Dado un arreglo de valores, cuenta cuántas veces aparece un valor específico
usando reduce().*/

let cadena=["Perro", "Gato","Vaca","Perro"];
let buscando="Perro";

let palabra=cadena.reduce((acumulador, contador)=>{
if(contador === buscando){
    return acumulador+1;
}else{
    return acumulador;
}
},0);
console.log(palabra);