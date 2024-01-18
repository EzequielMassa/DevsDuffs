/**
 * Genera una notificacion generica de SweetAlert con Timer.
 *
 * @param {string} titulo -El titulo de la notificacion
 * @param {HTMLElement} iconHtml - La etiqueta html a usar de icono en formato string.
 * @param {string} [position='top-end'] - La posicion de la notificacion , por defecto es 'top-end'.
 */

export const notificacionConTimerGenerica = (
	titulo,
	iconoHtml,
	posicion = 'top-start'
) => {
	Swal.fire({
		toast: true,
		position: posicion,
		showConfirmButton: false,
		title: titulo,
		timer: 3000,
		iconHtml: iconoHtml,
		timerProgressBar: true,
	})
}
