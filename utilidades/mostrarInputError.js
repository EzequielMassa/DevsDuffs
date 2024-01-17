/**
 *Setea la clase 'is-invalid' al elemento input recibido para mostrar el error.
 * @param {HTMLElement} input - El elemento input al cual añadirle la clase.
 * @return {void}
 */
export const mostrarInputError = (input) => {
	input.classList.remove('is-valid')
	input.classList.add('is-invalid')
}
