//Metodos de propiedad 

//Son funciones pero tienen las sintaxis de metodo

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion con el ID ${id}`)    
    },

    pausar : function(){
        console.log('Pausando...');
    },

    crearPlaylist : function(nombre){
        console.log(`Creando la playlist ${nombre}`)
    },

    reproducirPlaylist : function (nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

//Las funciones s epuden colocar a fuera del objeto peor en lugar de llevar ":" llevan "="

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion ${id}`);
}

reproductor.reproducir(3040);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Metal');
reproductor.reproducirPlaylist('Monitas chinas');