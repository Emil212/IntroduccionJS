async function obtenerEmpleados(){

//Colocar siempre la ruta correcta al archivo 

    const archivo = 'JS/empleados.json';

    
    // fetch(archivo)
        // .then(resultado => resultado.json())
        // .then(datos => {
            
        //     const {empleados} = datos;
        //     console.log(empleados);

        //     empleados.forEach(empleado => {
        //         console.log(empleado.id);
        //         console.log(empleado.nombre);
        //         console.log(empleado.puesto);

        //         document.querySelector('.contenido').textContent += empleado.nombre;
        //     });
            
        // })

        
    const resultado = await fetch(archivo);
    const datos = await resultado.json(); //Bloquea la ejecucion de la linea hasta que la de arriba haya terminado

    //La notacion por await es mas sencilla que por promises

    //console.log(resultado); //Solo muestra si se esta leyendo bien el archivo, no muestra los datos 

    //Consultas independientes entre si se ocupa promised.all

    console.log(datos);

}

obtenerEmpleados();

