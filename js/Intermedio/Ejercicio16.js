// Encontrar un elemento específico
//Dado un arreglo de objetos, encuentra el primer objeto que tenga una propiedad
//específica usando find()


let objeto=[
    {nombre:"chema", edad:19},
    {nombre:"lili", edad:18},
    {nombre:"robert", edad:20}
];


function arreglo(){
    let encuentra=objeto.find((buscar)=>buscar.nombre==="robert");
    console.log(encuentra);
}
arreglo();