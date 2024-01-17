import { limpiarInputError } from '../utilidades/limpiarInputError.js'
import { mostrarInputError } from '../utilidades/mostrarInputError.js'
import { validarCadenasIguales } from './validarCadenasIguales.js'
import { validarEmail } from './validarEmail.js'
import { validarEmailExistente } from './validarEmailExistente.js'
import { validarPassword } from './validarPassword.js'

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
