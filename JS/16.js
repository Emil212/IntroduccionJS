//Funciones en JS

//Declaracion de la funcion

function sumar (){
    console.log(10*10);
}

sumar();

//Expresion de la funcion

const sumar2 = function(){
    console.log(3+3);
}

sumar2();

//IIFE
//Este tipo de funciones se mandan llamar a ellas mismas
//Son utiles para proteger a las variables y que no se pueda acceder a ellas desde otro archivo

(function(){
    console.log("Esto es una funcion");
})();

// console.log(cliente);


