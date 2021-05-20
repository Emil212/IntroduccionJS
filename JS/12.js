"use strict"; //Aplica las buenas practicas 

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); //Evita que se pueda modificar, agregar o borrar el objeto 

// producto.imagen= "imagen.jpg";

console.log(Object.isFrozen(producto)); //Sirve para ver si un objeto es frozen

console.log(producto);

//con seal se puede modificar el objeto pero no eliminarlo ni agregar