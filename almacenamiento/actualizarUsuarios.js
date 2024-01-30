/**
 * Actualiza el local storage con la lista de usuarios pasada.
 *
 * @param {Array} listaUsuarios - La lista de usuarios a guardar.
 * @return {void} No retorna nada.
 */
export const actualizarUsuarios = (listaUsuarios) => {
	const usariosFormatoStorage = JSON.stringify(listaUsuarios)
	localStorage.setItem('usuarios', usariosFormatoStorage)
}
