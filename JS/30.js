//Promises

const usuarioAutenticado = new Promise((resolve, reject)=>{
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado');
    }
    else{
        reject('No se pudo iniciar sesion');
    }

});

usuarioAutenticado
    .then(resultado => console.log(resultado))

    .catch(error => console.log(error))


//Con esta sintaxis nos muestra los resultados del promise

//En los promises existe 3 valores

//Pending: No se ha cumplido ni rechazado
//Fulfilled: Ya se cumplio
//Rejected: Se ha rechazado o no se ha podido cumplir 

