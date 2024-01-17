import { passwordRegex } from './passwordRegex.js'
/**
 * Valida un password usando una expresion regular.
 *
 * @param {string} password - El password a ser validado.
 * @return {boolean} Retorna true si es un formato valido , false si no lo es.
 */
export const validarPassword = (password) => {
	const esPasswordValido = passwordRegex.test(password)
	return esPasswordValido
}
