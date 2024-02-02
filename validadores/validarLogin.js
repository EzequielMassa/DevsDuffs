import { obtenerUsuarios } from '../almacenamiento/obtenerUsuarios.js'
import { loginUsuario } from '../servicios/usuarios/loginUsuario.js'
import { limpiarInputError } from '../utilidades/limpiarInputError.js'
import { mostrarInputError } from '../utilidades/mostrarInputError.js'

/**
 * Valida las credenciales de login chequeando si el email y password
  coinciden con los de algun usuario registrado. si las credenciales son validad , el usuario es logueado y retorna true , sino retorna false y muestra mensaje de error.
 *
 * @param {any} inputEmail - El campo input email
 * @param {any} inputPassword - El campo input password
 * @return {boolean} Retorna true si las credenciales son correctas , false sino.
 */
export const validarLogin = (inputEmail, inputPassword) => {
	const valorEmail = inputEmail.value
	const valorPassword = password.value
	const usuario = obtenerUsuarios().find(
		(usuario) =>
			usuario.email == valorEmail && usuario.password == valorPassword
	)

	if (!usuario) {
		mostrarInputError(inputEmail)
		mostrarInputError(inputPassword)
		return false
	} else {
		limpiarInputError(inputEmail)
		limpiarInputError(inputPassword)
		loginUsuario(usuario)
		return true
	}
}
