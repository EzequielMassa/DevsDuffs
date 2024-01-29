import { guardarUsuario } from '../../almacenamiento/guardarUsuario.js'
import { renderizarNavbar } from '../../componentes/navbar/navbar.js'
import { Usuario } from '../../modelos/Usuario.js'
import { enviarEmailAAdmin } from '../../servicios/email/enviarEmailAAdmin.js'
import { notificarUsuarioCambioEstado } from '../../servicios/email/notificarUsuarioCambioEstado.js'
import { notificarUsuarioRegistroExitoso } from '../../servicios/notificaciones/notificarUsuarioRegistroExitoso.js'
import { mostrarPassword } from '../../utilidades/mostrarPassword.js'
import { validarRegistroUsuario } from '../../validadores/validarRegistroUsuario.js'

renderizarNavbar()


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
		const datosEmail = {
			asunto: 'Alta usuario',
			mensaje: `Hola Admins,
      Tienen un nuevo mensaje de : ${nuevoUsuario.email} :
      Solicito alta para mi id : ${nuevoUsuario.id}`,
			email_de: `${nuevoUsuario.email}`,
		}
		guardarUsuario(nuevoUsuario)
		enviarEmailAAdmin(
			datosEmail.asunto,
			datosEmail.mensaje,
			datosEmail.email_de
		)
		notificarUsuarioCambioEstado(nuevoUsuario.email, 'pendiente')
		notificarUsuarioRegistroExitoso(nuevoUsuario.email)
	}
}

formRegister.addEventListener('submit', registrarUsuario)
btnMostrarPassword.addEventListener('click', mostrarPassword)
