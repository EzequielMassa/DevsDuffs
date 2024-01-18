import { renderizarFilasUsuarios } from '../componentes/usuarios/renderizarFilasUsuarios.js'
import { quiereProseguirModal } from '../utilidades/quiereProseguirModal.js'
import { actualizarUsuarios } from './actualizarUsuarios.js'
import { obtenerUsuarioPorId } from './obtenerUsuarioPorId.js'
import { obtenerUsuarios } from './obtenerUsuarios.js'

/**
 * Elimina un usuario del local storage.
 *
 * @param {string} usuarioId - El ID del usuario.
 * @return {void} No retorna nada.
 */

export const eliminarUsuario = (usuarioId) => {
	const usuarios = obtenerUsuarios()
	const usuariosActualizados = usuarios.filter(
		(usuario) => usuario.id !== usuarioId
	)
	const usuarioEmail = obtenerUsuarioPorId(usuarioId).email

	let opcionesModal = {
		titulo: 'Desea continuar?',
		mensaje: `El usuario "${usuarioEmail}" se eliminara de la base de datos.`,
		imagenUrl: '../../../recursos/media/img/homero-pensando.png',
		imagenAltText: 'imagen homero pensando',
		textoBtnConfirmar: 'Si, Eliminar usuario!',
	}

	quiereProseguirModal(opcionesModal).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: 'Usuario eliminado!',
				icon: 'success',
				confirmButtonColor: '#e33e97',
			}).then(() => {
				actualizarUsuarios(usuariosActualizados)
				renderizarFilasUsuarios(usuariosActualizados)
			})
		} else {
			return
		}
	})
}
