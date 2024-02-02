import { renderizarNavbar } from '../../../componentes/navbar/navbar.js'
import { obtenerUsuarios } from '../../../almacenamiento/obtenerUsuarios.js'
import { filtrarUsuarios } from '../../../componentes/usuarios/filtrarUsuarios.js'
import { renderizarFilasUsuarios } from '../../../componentes/usuarios/renderizarFilasUsuarios.js'

document.addEventListener('DOMContentLoaded', () => {
	renderizarNavbar()
	const usuarios = obtenerUsuarios()
	renderizarFilasUsuarios(usuarios)
})

const filtrarUsuariosInput = document.querySelector('#filtrarUsuariosInput')

filtrarUsuariosInput.addEventListener('keyup', filtrarUsuarios)
filtrarUsuariosInput.addEventListener('paste', filtrarUsuarios)
