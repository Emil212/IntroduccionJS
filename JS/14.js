//Arrays o Arreglos

const numeros = [10,20,30,40,50];

// console.table(numeros);

const meses = new Array ('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

// console.log(meses);

// const Arreglo = ["Hola", 10, true, "si", null, {nombre: "Emiliano"},[1,2,3]];

// console.log(Arreglo);

// console.log(numeros[4]);

// //Conocer extension de un arreglo

// console.log(meses.length);

//Tipo for en JS

// numeros.forEach( function(mes){
//     console.log(numeros);
// })

numeros[5] = 60;

// console.log(numeros); 

numeros.push(70,80,90); //Agrega elementos al final del array

numeros.unshift(-10,-20,-30); //Agrega elemntos al principio del arreglo 

meses.pop(); //Elimina al final del arreglo
meses.shift(); //Elimina al principio del arreglo
meses.splice(1,1); //Elimina de acuerdo a posicion del elemento 

//Rest operator o spread operator 

const nuevoArrlego = [...meses, 'Junio']; //Es lo equivalente a un push, ya que asi no se afecta el array original y se trabaja sobre una copia 


const nuevoArrlego1 = ['Marzo',...meses ]; //Es lo equivalente a un unshift, ya que asi no se afecta el array original y se trabaja sobre una copia 

console.log(nuevoArrlego1); 

