/**
 * Retorna la lista de usuarios guardada en el local storage con la key "usuarios".
 *
 * @return {Array} La lista de usuarios del local storage de existir , si no un array vacio.
 */
export const obtenerUsuarios = () => {
	const usuarios = JSON.parse(localStorage.getItem('usuarios'))
	return usuarios ? usuarios : []
}
