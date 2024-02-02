import { obtenerUsuarios } from '../almacenamiento/obtenerUsuarios.js'
import { Usuario } from '../modelos/Usuario.js'
import { guardarUsuario } from './guardarUsuario.js'

/**
 * Crea un usuario Admin si no existe en la lista de usuarios y lo guarda en el local storage.
 *
 * @return {void} - No retorna nada
 */
export const crearUsuarioAdmin = () => {
	const usuarios = obtenerUsuarios()
	const existeAdmin = usuarios.find(
		(usuario) => usuario.email === 'duffdevs@gmail.com'
	)
	if (!existeAdmin) {
		const admin = new Usuario('duffdevs@gmail.com', 'duffdevs79i', 'admin')
		admin.estadoUsuario.pendiente = false
		admin.estadoUsuario.aprobado = true
		guardarUsuario(admin)
		return
	}
}
