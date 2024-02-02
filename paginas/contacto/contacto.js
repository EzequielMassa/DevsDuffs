import { renderizarNavbar } from '../../componentes/navbar/navbar.js'
import { limpiarInputError } from '../../utilidades/limpiarInputError.js'
import { mostrarInputError } from '../../utilidades/mostrarInputError.js'
import { validarEmail } from '../../validadores/validarEmail.js'
import { validarNombre } from '../../validadores/validarNombre.js'
import { validarTelefono } from '../../validadores/validarTelefono.js'
import { validarEdad } from '../../validadores/validarEdad.js'
import { enviarEmailAAdmin } from '../../servicios/email/enviarEmailAAdmin.js'

renderizarNavbar()
const formContacto = document.getElementById('formContacto')
formContacto.addEventListener('submit', (e) => {
	e.preventDefault()

	const { nombreContacto, emailContacto, telContacto, edadContacto, opinion } =
		e.target

	const sonCamposValidos = validarCampos(
		nombreContacto,
		emailContacto,
		telContacto,
		edadContacto,
		opinion
	)
	if (sonCamposValidos) {
		const datosEmail = {
			asunto: 'Solicitud de Contacto',
			mensaje: `Hola Admins,
      ${nombreContacto.value} ha completado el formulario de contacto :
      Email : ${emailContacto.value} 
			Telefono : ${telContacto.value}
			Edad : ${edadContacto.value}
			Opinion : ${opinion.value}
			`,
			email_de: `${emailContacto.value}`,
		}
		enviarEmailAAdmin(
			datosEmail.asunto,
			datosEmail.mensaje,
			datosEmail.email_de
		)
		formContacto.reset()
		Swal.fire({
			position: 'top-end',
			iconHtml:
				'<img src="../../recursos/media/img/dona-animada.gif" width="50" height="50">',
			title: 'Formulario enviado con exito.',
			showConfirmButton: false,
			timer: 3500,
		})
	}
})

const validarCampos = (nombre, email, telefono, edad, opinion) => {
	const esNombreValido = validarNombre(nombre)
	const esEmailValido = validarEmail(email.value)
	if (!esEmailValido) {
		mostrarInputError(email)
	} else {
		limpiarInputError(email)
	}

	const esTelefonoValido = validarTelefono(telefono)
	const esOpinionValida = opinion.value
	if (!esOpinionValida) {
		Swal.fire({
			title: 'Por favor seleccione una opcion.',
			icon: 'warning',
		})
	}
	const esEdadValida = validarEdad(edad)
	return (
		esNombreValido &&
		esEmailValido &&
		esTelefonoValido &&
		esEdadValida &&
		esOpinionValida
	)
}
//holaaaa
