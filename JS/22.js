//Estruturas de control

// const puntaje = 1001;
 
// if(puntaje === 1000){
//     console.log('Si el puntaje es 1000');

// }
// else{
//     console.log('No es igual');
// }

// const efectivo = 1000;
// const carrrito = 800;

// if(efectivo>carrrito){
//     console.log('El usuario puede pagar');
// }

// else{
//     console.log('Fondos insufucientes');
// }

const rol = 'Editor';

if(rol === 'Admin'){
    console.log('Acceso a todo el sistema');
}

else if(rol === 'Editor'){
    console.log('Accediste como editor, acceso limitado');
}
else{
    console.log('No tienes acceso')
}