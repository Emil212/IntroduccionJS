const producto = "Monitor de 20 pulgadas";
const producto2 = String("Monitor de 20 pulgadas");
const producto3 = new String("Monitor de 20 pulgadas");


console.log(producto);
console.log(producto.length);
console.log(typeof producto3);

//indexof

console.log(producto.indexOf('20')) //posicion en la que  esta un elemento una cadena, si no esta manda -1

console.log(producto.includes('20')) //True or False dependiendo si encuentra o no
 

