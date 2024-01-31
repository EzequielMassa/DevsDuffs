/**
 * Guarda el usuario logueado en el local storage con la key "usuarioLogueado".
 *
 * @param {Object} usuario - El objeto usuario a ser guardado.
 * @return {void} - No retorna nada
 */

export const setearUsuarioLogueado = (usuario) => {
	localStorage.setItem('usuarioLogueado', JSON.stringify(usuario))
}
