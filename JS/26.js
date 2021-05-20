// this

//El this se usa para acceder a los datos que estan dentro de un objeto desde el mismo objeto

//En este caso no funcionaria si se aplica un arrow elemnt debido a qeu este hace una referencia al la ventana global, se tendria que agregar asi

// window.nombre = 'Un nombre';

const reservacion = {
    nombre: 'Emiliano',
    apellido: 'Ceron', 
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre}  reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();