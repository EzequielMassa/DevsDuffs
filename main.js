// import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

let miBoton = document.getElementById('miBoton');
let boton404 = document.getElementsByClassName('boton404');


miBoton.addEventListener('click', function() {
    window.location.href = '/paginas/detalleDeCategoria/detalleDeCategoria.html';
});

boton404.addEventListener('click', function() {
    window.location.href = '/paginas/error404/error404.html';
});
