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
