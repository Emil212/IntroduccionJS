// POO

/** Object Literal**/

const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
//Permite crear muchos objetos a partir de una unica definicion

function Producto(nombre,precio,estado){
    this.nombre = nombre;
    this.precio = precio;
    this.estado = estado;
}

const producto2 = new Producto('Monitor curvo', 800, true);
const producto3 = new Producto('Televison', 100, false);
const producto4 = new Producto('Celular', 600, true);
const producto5 = new Producto('Audifonos', 200, false);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

//Prototypes basicamente es como un formateo pero haciendo que las funciones solo pueden ser ocupadas por un determinado tipo de objetos

//Se tiene que empezar por el mismo nombre que tiene el objeto



Producto.prototype.formatearProducto = function(){
    return (`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
}

console.log(producto2.formatearProducto());

