import { emailRegex } from './emailRegex.js'

/**
 * Valida un correo electronico con una expresion regular.
 *
 * @param {string} email - El email a ser validado.
 * @return {boolean} Retorna true si el email es un formato valido , false si no lo es
 */
export const validarEmail = (email) => {
	const esEmailValido = emailRegex.test(email)
	return esEmailValido
}
