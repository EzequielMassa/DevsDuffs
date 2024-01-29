/**
 * Envia un email al administrador cuando un usuario se registra solicitando su alta.
 *
 * @param {string} asunto - El motivo del email.
 * @param {string} mensaje - El mensaje a enviar al admin.
 * @param {string} email_de - El email de quien envia el mensaje.
 */
export const enviarEmailAAdmin = (asunto, mensaje, email_de) => {
	const serviceID = 'default_service'
	const templateID = 'template_4s5g58n'

	emailjs.send(serviceID, templateID, {
		asunto: asunto,
		mensaje: mensaje,
		email_de: email_de,
	})
}
