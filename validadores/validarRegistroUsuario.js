import { limpiarInputError } from '../utilidades/limpiarInputError.js'
import { mostrarInputError } from '../utilidades/mostrarInputError.js'
import { validarCadenasIguales } from './validarCadenasIguales.js'
import { validarEmail } from './validarEmail.js'
import { validarEmailExistente } from './validarEmailExistente.js'
import { validarPassword } from './validarPassword.js'

/**
 * Valida los datos ingreados por el usuario al momento de registrarse.
 *
 * @param {object} emailInput - El input del email.
 * @param {object} passwordInput - El input del password.
 * @param {object} passwordInputRepetir - El input de la confirmacion del password.
 * @return {boolean} Retorna true si es un registro valido , false sino.
 */
export const validarRegistroUsuario = (
	emailInput,
	passwordInput,
	passwordInputRepetir
) => {
	const valorEmail = emailInput.value.trim()
	const valorPassword = passwordInput.value.trim()
	const valorRepetirPassword = passwordInputRepetir.value.trim()

	const esEmailValido = validarEmail(valorEmail)
	const esPasswordValido = validarPassword(valorPassword)
	const existeEmail = validarEmailExistente(valorEmail)
	const esRepetirPasswordValido = validarCadenasIguales(
		valorPassword,
		valorRepetirPassword
	)

	!esEmailValido || existeEmail
		? mostrarInputError(emailInput)
		: limpiarInputError(emailInput)
	!esPasswordValido
		? mostrarInputError(passwordInput)
		: limpiarInputError(passwordInput)
	!esRepetirPasswordValido
		? mostrarInputError(passwordInputRepetir)
		: limpiarInputError(passwordInputRepetir)

	return (
		esEmailValido && esPasswordValido && !existeEmail && esRepetirPasswordValido
	)
}
