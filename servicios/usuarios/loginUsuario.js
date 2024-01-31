import { setearUsuarioLogueado } from '../../almacenamiento/setearUsuarioLogueado.js'
import { obtenerEstadoUsuario } from './obtenerEstadoUsuario.js'

/**
 * Loguea al usuario , le muestra un mensaje de bienvenida y lo redirecciona al home en caso de que su rol sea 'user' o al panel de administracion en caso que su rol sea 'admin'
 * @param {object} usuario - El objeto usuario.
 * @return {void}
 */

export const loginUsuario = (usuario) => {
	const { email, rol } = usuario
	const estadoUsuario = obtenerEstadoUsuario(usuario)
	const nombre = email.split('@')[0]

	if (estadoUsuario != 'aprobado') {
		Swal.fire({
			title: `Hola ${nombre}`,
			text: `Tu estado actual es ${estadoUsuario} , lamentablemente no puedes iniciar sesion, se te notificara a tu correo cuando el administrador te apruebe.`,
			imageUrl: '../../recursos/media/img/marge-error-login.gif',
			imageAlt: 'imagen esperando redireccionamiento',
			imageWidth: '75%',
			timerProgressBar: true,
			showConfirmButton: true,
			backdrop: `
    rgba(0,0,123,0.4)
    center center
    no-repeat
  `,
			allowOutsideClick: false,
		})
		return
	}
	Swal.fire({
		title: `Bienvenido ${nombre}`,
		text: 'En unos instantes seras redireccionado',
		imageUrl: '../../recursos/media/img/bart-login.gif',
		imageAlt: 'imagen esperando redireccionamiento',
		imageWidth: '75%',
		timerProgressBar: true,
		showConfirmButton: false,
		backdrop: `
    rgba(0,0,123,0.4)
    center center
    no-repeat
  `,
		allowOutsideClick: false,
	})
	setearUsuarioLogueado(usuario)
	setTimeout(() => {
		rol == 'admin'
			? (window.location.href = '/paginas/admin/usuarios/usuarios.html')
			: (window.location.href = '/index.html')
	}, 4000)
}
