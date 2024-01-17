import { guardarUsuario } from '../../almacenamiento/guardarUsuario.js'
import { Usuario } from '../../modelos/Usuario.js'
import { enviarEmailAltaUsuarioAAdmin } from '../../servicios/email/enviarEmailAltaUsuarioAAdmin.js'
import { mostrarPassword } from '../../utilidades/mostrarPassword.js'
import { validarRegistroUsuario } from '../../validadores/validarRegistroUsuario.js'
import { notificarUsuarioCambioEstado } from '../../servicios/email/notificarUsuarioCambioEstado.js'
import { notificarUsuarioRegistroExitoso } from '../../servicios/notificaciones/notificarUsuarioRegistroExitoso.js'

const formRegister = document.querySelector('#formRegister')
const btnMostrarPassword = document.getElementById('btnMostrarPassword')

/**
 *Registra un nuevo usuario.
 *
 * @param {Event} e - El evento del objeto.
 * @return {void} No retorna nada.
 */
const registrarUsuario = (e) => {
	e.preventDefault()
	const { email, password, repetirPassword } = e.target
	if (validarRegistroUsuario(email, password, repetirPassword)) {
		const nuevoUsuario = new Usuario(
			email.value.trim(),
			password.value.trim(),
			'user'
		)
		guardarUsuario(nuevoUsuario)
		enviarEmailAltaUsuarioAAdmin(nuevoUsuario.email, nuevoUsuario.id)
		notificarUsuarioCambioEstado(nuevoUsuario.email, 'pendiente')
		notificarUsuarioRegistroExitoso(nuevoUsuario.email)
	}
}

formRegister.addEventListener('submit', registrarUsuario)
btnMostrarPassword.addEventListener('click', mostrarPassword)
