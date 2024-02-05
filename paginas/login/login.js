import { crearUsuarioAdmin } from '../../almacenamiento/crearUsuarioAdmin.js'
import { obtenerUsuarios } from '../../almacenamiento/obtenerUsuarios.js'
import { renderizarNavbar } from '../../componentes/navbar/navbar.js'
import { notificarUsuarioCambioEstado } from '../../servicios/email/notificarUsuarioCambioEstado.js'
import { validarLogin } from '../../validadores/validarLogin.js'
import { validarRecuperoContrasenia } from '../../validadores/validarRecuperoContrasenia.js'

crearUsuarioAdmin()
renderizarNavbar()

const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const { email, password } = e.target
	validarLogin(email, password)
})

const modalOlvidoContraseniaForm = document.querySelector(
	'#modalOlvidoContraseniaForm'
)
modalOlvidoContraseniaForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const { inputEmailOlvidoContrasenia } = e.target
	if (validarRecuperoContrasenia(inputEmailOlvidoContrasenia)) {
		recuperarContrasenia(inputEmailOlvidoContrasenia.value.trim())
	}
})

const modal = new bootstrap.Modal(
	document.getElementById('modalOlvidoContrasenia')
)

const recuperarContrasenia = (email) => {
	const usuario = obtenerUsuarios().find((usuario) => usuario.email == email)
	notificarUsuarioCambioEstado(email, usuario.password)
	modalOlvidoContraseniaForm.reset()
	modalOlvidoContraseniaForm.inputEmailOlvidoContrasenia.classList.remove(
		'is-valid'
	)
	modal.hide()

	Swal.fire({
		title: 'Email enviado con exito',
		text: 'Revisa tu bandeja de entrada!',
		icon: 'success',
	})
}
