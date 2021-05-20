//Arrow Functions

//Expresion de la funcion

//Expresion de la funcion

const sumar1 = function(n1,n2){
    console.log(n1+n2);
}
sumar1(5,10);

//Lo anterior se puede  reemplazar con esto

const sumar2 = (n1,n2)=>{
    console.log(n1+n2);
}
sumar2(5,10);

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
}

//Si solo lleva una linea dentro de las llaves y si solo se pasa un argumento se puede omitir tanto la llave como el parentesis en caso de return tambien es opcional 

// const aprendiendo = tecnologia =>  console.log(`Aprendiendo ${tecnologia}`)


aprendiendo('JavaScript');

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

meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

resultado = carrito.some(producto => producto.nombre === 'Celular');

resultado = carrito.reduce((total,producto) => total  + producto.precio, 0); //Total se inicializa en 0

resultado = carrito.filter(producto => producto.precio>400);

resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado)
