//Funciones con parametros y argumentos 

//numero 1 y 2 son parametros de la funcion porque van dentro de la declaracion de la funcion, no son los valores reales, son variables 

//Los parametros por default hacen que en caso de no incluir uno de los parametros la funcion se pueda realizar, para ello se asigna un valor predeterminado

function sumar (numero1=0,numero2=0){ 
    console.log(numero1 + numero2);
}
sumar(10,10); 
sumar(30,19); 
sumar(20,30); 
sumar(40); 

//Los argumentos son los valores reales de las variables numero1 y numero2

//Al tener paramtros y argumentos la funcion es mas dinamica e inteligente y permite que se pueda reutilizar mas 

const sumar2 = function(n1,n2){
    console.log(n1+n2);
}
sumar2(1,1);





