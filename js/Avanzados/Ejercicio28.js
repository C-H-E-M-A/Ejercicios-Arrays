/*Transforma un arreglo de objetos
Dado un arreglo de objetos con propiedades {nombre: string, edad: number}, usa
map() para crear un nuevo arreglo que solo contenga los nombres*/

let objeto=[
    {nombre:"chema", edad:19},
    {nombre:"lili", edad:18},
    {nombre:"robert", edad:20}
];

function nombres(objeto){
    let nuevo=objeto.map(objeto=>objeto.nombre);
    console.log(nuevo);


}
nombres(objeto)