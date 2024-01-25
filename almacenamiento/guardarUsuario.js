import { actualizarUsuarios } from './actualizarUsuarios.js'
import { obtenerUsuarios } from './obtenerUsuarios.js'

/**
 * Guarda un usuario en el local storage.
 *
 * @param {object} usuario - El objeto usuario a ser guardado.
 * @return {void} No retorna nada.
 */
export const guardarUsuario = (usuario) => {
	const usuarios = obtenerUsuarios()
	usuarios.push(usuario)
	actualizarUsuarios(usuarios)
}
