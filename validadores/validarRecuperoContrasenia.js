import { validarEmail } from './validarEmail.js'
import { validarEmailExistente } from './validarEmailExistente.js'
import { mostrarInputError } from '../utilidades/mostrarInputError.js'
import { limpiarInputError } from '../utilidades/limpiarInputError.js'

export const validarRecuperoContrasenia = (InputEmail) => {
	const valorInput = InputEmail.value.trim()
	const formatoEmailValido = validarEmail(valorInput)
	const existeEmail = validarEmailExistente(valorInput)
	!formatoEmailValido
		? mostrarInputError(InputEmail)
		: limpiarInputError(InputEmail)

	!existeEmail ? mostrarInputError(InputEmail) : limpiarInputError(InputEmail)

	return formatoEmailValido && existeEmail
}
