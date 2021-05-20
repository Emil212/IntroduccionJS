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

//Cuando se quiera mostrar algo en consola o en el html 

carrito.forEach(producto => console.log(producto.nombre));


//map

//Crear un nuevo arreglo que no se puede mostrar en consola ni imprimir en html

carrito.map(producto => console.log(producto.nombre)); 

const arreglo1=carrito.map( producto => `${producto.nombre} - ${producto.precio}`); 

console.log(arreglo1);








