/* Dado un arreglo de personas con edades, agrúpalas en diferentes grupos según la
década en la que se encuentren (20s, 30s, etc.) usando reduce().*/

const personas = [
    { nombre: "lili", edad: 20 },
    { nombre: "Angeles", edad: 23 },
    { nombre: "Jose", edad: 16 },
    { nombre: "Martin", edad: 31 },
    { nombre: "Victor", edad: 35 }
];

const gruposPorDecada = personas.reduce((acumulador, persona) => {
    const decada = Math.floor(persona.edad / 10) * 10; // Calcular la década con el Math.floor
    if (!acumulador[decada]) {
        acumulador[decada] = [];
    }
    acumulador[decada].push(persona);
    return acumulador;
}, {});

console.log(gruposPorDecada);