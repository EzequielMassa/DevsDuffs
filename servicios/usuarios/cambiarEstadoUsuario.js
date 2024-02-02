import { modificarUsuario } from '../../almacenamiento/modificarUsuario.js'
import { obtenerUsuarioPorId } from '../../almacenamiento/obtenerUsuarioPorId.js'
import { obtenerUsuarios } from '../../almacenamiento/obtenerUsuarios.js'
import { renderizarFilasUsuarios } from '../../componentes/usuarios/renderizarFilasUsuarios.js'
import { quiereProseguirModal } from '../../utilidades/quiereProseguirModal.js'
import { notificarUsuarioCambioEstado } from '../email/notificarUsuarioCambioEstado.js'
import { notificacionConTimerGenerica } from '../notificaciones/notificacionConTimerGenerica.js'
import { obtenerEstadoUsuario } from './obtenerEstadoUsuario.js'

/**
 * Cambia el estado de un usuario.
 *
 * @param {string} nuevoEstado - El nuevo estado a ser asignado al usuario.
 * @param {string} usuarioId - El ID del usuario.
 */

export const cambiarEstadoUsuario = (nuevoEstado, usuarioId) => {
	const usuario = obtenerUsuarioPorId(usuarioId)
	let estadoActual = obtenerEstadoUsuario(usuario)
	usuario.estadoUsuario[estadoActual] = false
	usuario.estadoUsuario[nuevoEstado.toLowerCase()] = true

	let opcionesModal = {
		titulo: 'Desea continuar?',
		mensaje: `El estado del usuario "${usuario.email}" cambiara de "${estadoActual}" a "${nuevoEstado}"`,
		imagenUrl: '../../../recursos/media/img/homero-pensando.png',
		imagenAltText: 'imagen homero pensando',
		textoBtnConfirmar: 'Si, cambiar estado!',
	}

	quiereProseguirModal(opcionesModal).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: 'Estado cambiado!',
				icon: 'success',
				confirmButtonColor: '#e33e97',
			}).then(() => {
				modificarUsuario(usuario)
				notificarUsuarioCambioEstado(usuario.email, nuevoEstado)
				notificacionConTimerGenerica(
					'Notificando al usuario',
					"<img src='../../../recursos/media/img/email-send.gif' />"
				)
			})
		} else {
			const usuarios = obtenerUsuarios()
			renderizarFilasUsuarios(usuarios)
		}
	})
}
