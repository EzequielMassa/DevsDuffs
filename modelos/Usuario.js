/**
 * Representa un usuario.
 * @constructor
 * @param {string} email - El correo electronico del usuario.
 * @param {string} password - El password del usuario.
 * @param {string} rol - El rol del usuario.
 */

export class Usuario {
	constructor(email, password, rol) {
		this.email = email
		this.password = password
		this.rol = rol
		this.estadoUsuario = {
			pendiente: true,
			aprobado: false,
			suspendido: false,
		}
		this.id = crypto.randomUUID()
	}
}
