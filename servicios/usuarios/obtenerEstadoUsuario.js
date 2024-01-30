/**
 * Retorna la key de `usuario.estadoUsuario` que tenga el valor de true
 * @param {Object} usuario - El objeto Usuario
 * @return {string} La key con valor de 'true'.
 */
export const obtenerEstadoUsuario = (usuario) => {
	const resultadoMapeado = Object.keys(usuario.estadoUsuario).filter(
		(result) => {
			const value = usuario.estadoUsuario[result]
			if (value == true) {
				return result
			}
		}
	)
	return resultadoMapeado[0]
}
