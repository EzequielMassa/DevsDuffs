let estadoActual = false

/**
 * Cambia la visibilidad del campo de un input password cuando se clickea el boton.
 *
 * @param {Event} e - El evento al hacer click en el boton.
 * @return {void} No retorna nada.
 */
export const mostrarPassword = (e) => {
	e.preventDefault()
	const boton = e.target.id == 'icono' ? e.target.parentElement : e.target
	const input = boton.previousElementSibling
	const icono = boton.firstElementChild

	estadoActual = !estadoActual
	estadoActual ? (input.type = 'text') : (input.type = 'password')
	estadoActual
		? icono.classList.add('bi-eye-slash')
		: icono.classList.add('bi-eye')
	estadoActual
		? icono.classList.remove('bi-eye')
		: icono.classList.remove('bi-eye-slash')
}
