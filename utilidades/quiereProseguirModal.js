/**
 * Genera un modal preguntandole al usuario si desea proseguir con su accion.
 *
 * @param {Object} options - Un Objeto con las siguientes propiedades:
 *   @param {string} options.titulo - El titulo del modal.
 *   @param {string} options.mensaje - El mensaje a mostrar.
 *   @param {string} options.imagenUrl - La url de la imagen a mostrar.
 *   @param {string} options.imagenAltText - Texto alternativo para accesibilidad de la imagen.
 *   @param {string} options.textoBtnConfirmar - El texto del boton aceptar.
 *
 *   @return {Promise} Una promesa con la eleccion del usuario.
 */
export const quiereProseguirModal = ({
	titulo,
	mensaje,
	imagenUrl,
	imagenAltText,
	textoBtnConfirmar,
}) => {
	return Swal.fire({
		title: titulo,
		text: mensaje,
		imageUrl: imagenUrl,
		imageWidth: 150,
		imageAlt: imagenAltText,
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: textoBtnConfirmar,
		cancelButtonText: 'Cancelar',
	})
}
