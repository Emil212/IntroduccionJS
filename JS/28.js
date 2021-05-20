//clases

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
    return (`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
    
}

const producto1 = new Producto('Monitor de 40"', 800);
const producto2 = new Producto('Laptop', 1000);

//Herencia

//Asi se hereda de una funcion a otra 

class Libro  extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre, precio); //Indica cuales se estan heredando
        this.isbn = isbn
    }

    formatearProducto(){
        return (`${super.formatearProducto()} y su isbn es ${this.isbn}`);
        }

//Aqui tambien se aplica la herencia para no repetir lo mismo qu esta arriba

}

const libro = new Libro('JavaScript la Revolucion', 120, '676287262');

console.log(producto1.formatearProducto());
console.log(producto2.formatearProducto());
console.log(libro.formatearProducto());
