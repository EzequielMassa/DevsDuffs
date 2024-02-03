/**
 * Valida si 2 strings pasados son iguales
 *
 * @param {string} string1 - El primer string.
 * @param {string} string2 - El segundo string.
 * @return {boolean} Retorna true si son iguales , false si no lo sons.
 */
export const validarCadenasIguales = (string1, string2) => {
	return string1 === string2 && string1.length > 0 && string2.length > 0
}
