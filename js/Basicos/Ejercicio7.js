//Eliminar duplicados
//Dado un arreglo de números, retorna un nuevo arreglo con los valores únicos (sin
//duplicados).

let numeros=[1,1,2,3,4,5,6,6,8,4,5,];

function duplicados(numeros){
    let unico=new Set(numeros)
    let nuevo=[...unico]
    console.log(nuevo)
}
duplicados(numeros)