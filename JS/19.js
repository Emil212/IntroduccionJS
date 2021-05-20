//Funciones que retornan valores 

// function sumar(n1,n2){
//     return n1+n1;
// }

// const resultado = sumar(2,3);

// console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

function calcularImpuesto(total){
    return total*1.15;
}

console.log(total);

//No olvidar pasar los argumentos y parametros correctamente 

const totalAPagar = calcularImpuesto(total);


console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);


