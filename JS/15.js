//Array methods

const meses = new Array ('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const carrito = [
    {nombre: "Monitor 20 Pulgadas", precio: 500},
    {nombre: "Television 50 Pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800},
];

//forEach 
//Hace que se repita el contenido del arreglo por cada elemnto dentro de el

//mes es la variable de control de la estrcutira es lo equivalente al i o k en c++

meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//includes

//Con este metodo sirve para ver si existe un elemnto dentro de un arreglo, si existe nos arroja un true y si no un false
//Funciona con arreglos planos, si se tienen objetos no es la mejor opcion 

let resultado = meses.includes('Diciembre');
let resultado2 = carrito.includes('Diciembre')

//Some ideal para arreglo de objetos

//== es usado para comparar dos variables pero ingnora el tipo de dato
//=== es usado para compara dos variables pero si verifica el tipo de dato

resultado = carrito.some(function(producto){
    return producto.nombre ==='Celular'
});

//Ejemplo de arrow fuction

resultado1 = carrito.some(producto => producto.nombre === 'Celular');

console.log(resultado1);

//Otra manera de copiar un array

let copiaArray = carrito.slice();

console.log(copiaArray);

// Reduce
// Sirve para sumar el precio del carrito 

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
},0); //valor inicial  


//Por arroy Function 

//Es mas sencillo por este metodo

resultado = carrito.reduce((total, producto) => total + producto.precio,0);

console.log(resultado);


//Filter 

//Sirve para filtrar

resultado = carrito.filter(function(producto){
    return producto.precio > 400;
});

console.log(resultado);

//Por el otro metodo

resultado = carrito.filter(producto => producto.precio > 400);

console.log(resultado);

resultado = carrito.filter(producto => producto.nombre=== "Celular");

console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== "Celular"); //Muestra todos los que no sean celulares

console.log(resultado);