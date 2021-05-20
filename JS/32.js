// Aync / await

function descargarClientes (){
    return new Promise(()=>{
        console.log('Descargando clientes... espere...');

        setTimeout(() =>{
            console.log('Los Clientes fueron Descargados');
        }, 5000);

    })
};

function descargarPedidos (){
    return new Promise(() =>{
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            console.log('Los pedidos fueron Descargados');
        }, 3000);
    })
};

async function app(){
    try {
        // const clientes = await descargarClientes();
        // console.log(clientes);
        // const pedidos = await descargarPedidos();
        // console.log(pedidos); 
        
        const resultado = await Promise.all([descargarClientes(),descargarPedidos()]);
        
        //Es un arreglo de promises
        //Las dos funciones se ejecutan al mismo tiempo 

        console.log(resultado[0]); 
        console.log(resultado[1]);

    } catch (error) {
        console.log(error);       
    }   
}

app();

//Se pone try catch pars que no se genere error en caso de que no se descargue la lista y se pueda continuar con la ejecuacion del programa 

//Basicamente funciona para que no se quede la pagina estancada en un proceso que sea muy largo, se continua ejecutando mientras muestra el resto del codigo 






