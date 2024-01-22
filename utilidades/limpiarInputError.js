/**
 * Limpia los errores de un input, removiendo la clase 'is-invalid' y añadiendo la clase 'is-valid'.
 * @param {HTMLElement} input - El elemento input a limpiar.
 * @return {void}.
 */
export const limpiarInputError = (input) => {
	input.classList.remove('is-invalid')
	input.classList.add('is-valid')
}
