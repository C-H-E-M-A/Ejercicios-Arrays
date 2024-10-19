/* Plana un arreglo anidado
Dado un arreglo que contiene arreglos anidados, usa flat() para aplanarlo en un solo
nivel.*/

let arreglo=[
    [1,2,6],
    [6,5,8],
    [8,8,6]
];

function anidado(arreglo){
    let exanidado=arreglo.flat(1,2,3);
    console.log(exanidado)
}
anidado(arreglo);
