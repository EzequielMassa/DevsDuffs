import { obtenerUsuarios } from '../almacenamiento/obtenerUsuarios.js'

/**
 * Valida si el email pasado existe en la lista de usuarios.
 *
 * @param {string} email - El email a ser validado.
 * @return {boolean} - Retorna true si el email existe , false si no existe.
 */
export const validarEmailExistente = (email) => {
	const usuarios = obtenerUsuarios()
	const existeEmail = usuarios.some((usuario) => usuario.email === email)
	return existeEmail
}
