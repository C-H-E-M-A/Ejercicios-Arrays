//Palabras más largas que "n" letras
//Escribe una función que, dado un arreglo de palabras y un número n, devuelva las
//palabras que tengan más de nletras

let cadena=["Sapo", "Perico", "Glosario", "Pato", "Unicornio","Universidad", "Reglas"]
let numero=8;
function palabras(cadena,numero){
    let cantidad=cadena.filter(palabra => palabra.length > numero);
    console.log(cantidad);

}
palabras(cadena,numero);