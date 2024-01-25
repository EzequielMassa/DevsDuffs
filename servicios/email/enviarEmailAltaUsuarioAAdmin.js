/**
 * Envia un email al administrador cuando un usuario se registra solicitando su alta.
 *
 * @param {string} emailUsuario - La direccion de email del usuario.
 * @param {string} id - El ID del usuario.
 */
export const enviarEmailAltaUsuarioAAdmin = (emailUsuario, id) => {
	const serviceID = 'default_service'
	const templateID = 'template_4s5g58n'

	emailjs.send(serviceID, templateID, {
		email_de: emailUsuario,
		usuario_id: id,
	})
}
