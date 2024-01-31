import { setearFavoritos } from './almacenamiento/setearFavoritos.js'
import { renderizarFavoritos } from './componentes/favoritos/renderizarFavoritos.js'
import { renderizarNavbar } from './componentes/navbar/navbar.js'
import { setcapitulos } from './servicios/datos/setCapitulos.js'
setcapitulos()

document.addEventListener('DOMContentLoaded', () => {
	renderizarNavbar()
	renderizarFavoritos()
})

setearFavoritos()
