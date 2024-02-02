import { crearUsuarioAdmin } from './almacenamiento/crearUsuarioAdmin.js'
import { renderizarFavoritos } from './componentes/favoritos/renderizarFavoritos.js'
import { renderizarNavbar } from './componentes/navbar/navbar.js'
import { setcapitulos } from './almacenamiento/setCapitulos.js'

document.addEventListener('DOMContentLoaded', () => {
	crearUsuarioAdmin()
	renderizarNavbar()
	renderizarFavoritos()
})

setcapitulos()

let miBoton = document.getElementById('miBoton')
let botones404 = document.querySelectorAll('.botones404')

miBoton.addEventListener('click', function () {
	window.location.href = '/paginas/detalleDeCategoria/detalleDeCategoria.html'
})

botones404.forEach((boton) => boton.addEventListener('click', function () {
	window.location.href = '/paginas/error404/error404.html'
})) 

