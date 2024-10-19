//Buscar elemento
//Escribe una función que reciba un arreglo y un valor, y retorne true si el valor existe
//en el arreglo y false si no.

let cadena=["Hola", "Perro", "Gua"];
let valor='perrro'
function existecadena(cadena){
    let nueva=cadena.includes(valor);
    console.log(nueva)
}
existecadena(cadena);