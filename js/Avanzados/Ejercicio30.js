/*Combinar objetos de dos arreglos
Dado dos arreglos de objetos, usa map() para combinar los objetos con el mismo
índice en un solo arreglo de objetos.*/

const arreglo1 = [
    { nombre: "Karla", edad: 23 },
    { nombre: "Robert", edad: 20 },
    { nombre: "Fernando", edad: 16 }
];

const arreglo2 = [
    { genero: "Mujer" },
    { genero: "Hombre" },
    { genero: "Hombre" }
];

const combinarArreglos= arreglo1.map((elemento, indice) => {
    return { ...elemento, ...arreglo2[indice] };
});

console.log(combinarArreglos);