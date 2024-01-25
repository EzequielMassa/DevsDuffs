import { obtenerUsuarios } from './obtenerUsuarios.js'

/**
 * Retorna un usuario del local storage basado en su Id.
 *
 * @param {number} usuarioId - El id del usuario.
 * @return {Object} El usuario en caso de encontrarse ese id, sino null.
 */

export const obtenerUsuarioPorId = (usuarioId) => {
	const usuarios = obtenerUsuarios()
	const usuario = usuarios.find((u) => u.id == usuarioId)
	return usuario ? usuario : null
}
