import { crearUsuarioAdmin } from './almacenamiento/crearUsuarioAdmin.js'
import { setcapitulos } from './almacenamiento/setCapitulos.js'
import { renderizarFavoritos } from './componentes/favoritos/renderizarFavoritos.js'
import { renderizarNavbar } from './componentes/navbar/navbar.js'

document.addEventListener('DOMContentLoaded', () => {
	crearUsuarioAdmin()
	renderizarNavbar()
	renderizarFavoritos()
})

setcapitulos()

let botones404 = document.querySelectorAll('.botones404')

botones404.forEach((boton) =>
	boton.addEventListener('click', function () {
		window.location.href = '/paginas/error404/error404.html'
	})
)
