/**
 * Envia un email al usuario cuando un admin cambia su estado informandole del mismo.
 *
 * @param {string} emailUsuario - La direccion email del usuario.
 * @param {string} nuevoEstado - El estado a informar.
 * @return {void} No retorna nada.
 */
export const notificarUsuarioCambioEstado = (emailUsuario, nuevoEstado) => {
	const serviceID = 'default_service'
	const templateID = 'template_slo62zl'
	const mensaje =
		nuevoEstado == 'aprobado' ||
		nuevoEstado == 'pendiente' ||
		nuevoEstado == 'suspendido'
			? cambiarMensajeSegunEstado(nuevoEstado)
			: enviarMensajeContrasenia(nuevoEstado)

	emailjs
		.send(serviceID, templateID, {
			user_email: emailUsuario,
			from_name: 'DevsDuff',
			message: mensaje,
		})
		.then(
			() => {},
			(err) => {
				alert(JSON.stringify(err))
			}
		)
}

const cambiarMensajeSegunEstado = (estado) => {
	if (estado === 'pendiente') {
		return 'Tu estado actual es pendiente de aprobacion , tendras que esperar que los administradores aprueben tu cuenta para poder disfrutar de todas las funcionalidades de nuestro sitio.'
	}
	if (estado === 'aprobado') {
		return 'Felicidades , tu cuenta fue aprobada y ya podes disfrutar de todas las funcionalidades de nuestro sitio! https://devsduff.netlify.app/paginas/login/login.html'
	}
	if (estado === 'suspendido') {
		return 'Lamentamos informarte que tu cuenta fue suspendida y ya no podras disfrutar de todas las funcionalidades de nuestro sitio.'
	}
}

const enviarMensajeContrasenia = (infoCambioContrasenia) => {
	return `Hola , tu contraseña es : ${infoCambioContrasenia} , te recomendamos anotarla en un lugar seguro!`
}
