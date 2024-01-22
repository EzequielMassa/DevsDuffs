import { obtenerUsuarios } from '../../almacenamiento/obtenerUsuarios.js'
import { renderizarErrorFiltroUsuarios } from './renderizarErrorFiltroUsuarios.js'
import { renderizarFilasUsuarios } from './renderizarFilasUsuarios.js'

/**
 * Filtra la lista de usuarios basado en el input value pasado y renderiza el resultado filtrado o un mensaje de error.
 *
 * @param {Event} eventoInput - El evento del input.
 * @return {void} No retorna nada.
 */

export const filtrarUsuarios = (eventoInput) => {
	const valorABuscar = eventoInput.target.value
	const usuarios = obtenerUsuarios()
	const resultado = usuarios.filter(
		(usuario) =>
			usuario.email.includes(valorABuscar) || usuario.id.includes(valorABuscar)
	)
	resultado.length > 0
		? renderizarFilasUsuarios(resultado)
		: renderizarErrorFiltroUsuarios('No se encontraron resultados')
}
