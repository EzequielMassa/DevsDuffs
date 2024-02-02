/**
 * Notifica al usuario de un registro exitoso mostrando un popup con mensaje.
 *
 * @param {string} emailUsuario - La direccion de email del usuario.
 * @return {void} No retorna nada.
 */
export const notificarUsuarioRegistroExitoso = (emailUsuario) => {
	Swal.fire({
		title: `Se ha enviado un email a ${emailUsuario} con los pasos a seguir.`,
		width: 600,
		padding: '2em',
		color: '#716add',
		background: '#fff',
		backdrop: `
    rgba(0,0,123,0.4)
    url("../../../recursos/media/img/dona-animada.gif")
    top center
    no-repeat
  `,
		allowOutsideClick: false,
		allowEscapeKey: false,
	}).then((result) => {
		if (result.isConfirmed) {
			window.location.href = '/paginas/login/login.html'
		}
	})
}
