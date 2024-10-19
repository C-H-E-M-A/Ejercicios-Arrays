//Invertir un arreglo
//Escribe una función que tome un arreglo y lo devuelva invertido (sin usar reverse()).


let arreglo=['hola'];
let arregloInvertido=[];

function invertido(){
    for(let i = arreglo.length -1 ; i>=0; i--){        
    arregloInvertido.push(arreglo[i]);
    }
    console.log(arregloInvertido)
}

arregloInvertido();