
const boton = document.querySelector('#boton');
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es: ', resultado));
});

//Recordar tener cuaidado con los ;
//No importa el nombre que sele ponga a la variable para ver el resultado

if(Notification.permission == 'granted'){
    new Notification('Esta en una notificacion',{
        icon: 'img/anime.jpg',
        body: 'Viendo animu solo?'
    })
}