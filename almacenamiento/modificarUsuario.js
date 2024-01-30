import { obtenerUsuarios } from './obtenerUsuarios.js'
import { renderizarFilasUsuarios } from '../componentes/usuarios/renderizarFilasUsuarios.js'
import { actualizarUsuarios } from './actualizarUsuarios.js'

/**
 * Actualiza la informacion del usuario en el local storage.
 *
 * @param {Object} usuario - El objeto usuario.
 * @return {void} No retorna nada.
 */

export const modificarUsuario = (usuario) => {
	const usuarios = obtenerUsuarios()
	const usuarioIndex = usuarios.findIndex((u) => u.id == usuario.id)
	usuarios[usuarioIndex] = usuario
	renderizarFilasUsuarios(usuarios)
	actualizarUsuarios(usuarios)
}
