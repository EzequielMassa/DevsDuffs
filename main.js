import { setearFavoritos } from './almacenamiento/setearFavoritos.js'
import { renderizarFavoritos } from './componentes/favoritos/renderizarFavoritos.js'
import { renderizarNavbar } from './componentes/navbar/navbar.js'
import { setcapitulos } from './servicios/datos/setCapitulos.js'

document.addEventListener('DOMContentLoaded', () => {
	renderizarNavbar()
	renderizarFavoritos()
})

setcapitulos()
setearFavoritos()

let miBoton = document.getElementById('miBoton');
let boton404 = document.getElementsByClassName('boton404');

miBoton.addEventListener('click', function() {
    window.location.href = '/paginas/detalleDeCategoria/detalleDeCategoria.html';
});

boton404.addEventListener('click', function() {
    window.location.href = '/paginas/error404/error404.html';
});
