/**
 * Recupera el usuario logueado del local storage
 *
 * @return {Object|null} Retorna el objeto usuario en caso de existir la key 'usuarioLogueado' o null en caso contrario.
 */
export const obtenerUsuarioLogueado = () => {
	const usuario = JSON.parse(localStorage.getItem('usuarioLogueado')) || null
	return usuario
}
