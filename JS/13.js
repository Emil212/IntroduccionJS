"use strict";
//En este programa se van a unir objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

//Buena practica de no modificar los datos originales 

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);


