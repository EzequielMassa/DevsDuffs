import { eliminarUsuario } from '../../almacenamiento/eliminarUsuario.js'
import { cambiarEstadoUsuario } from '../../servicios/usuarios/cambiarEstadoUsuario.js'
import { obtenerEstadoUsuario } from '../../servicios/usuarios/obtenerEstadoUsuario.js'

const tablaUsuarios = document.querySelector('#tablaUsuarios')

export const renderizarFilasUsuarios = (listaUsuarios) => {
	tablaUsuarios.innerHTML = ''
	listaUsuarios.forEach((usuario) => {
		let estado = obtenerEstadoUsuario(usuario)
		tablaUsuarios.innerHTML += `
		<tr class="table-light">
								<th scope="row">${usuario.id}</th>
								<td>${usuario.email}</td>
								<td>${usuario.rol}</td>
								<td>
									<select
									  data-id="${usuario.id}"
										class="form-select form-select-sm"
										aria-label="Seleccionar estado">
										<option selected disabled class='bg-dark-subtle '>${estado}</option>
										${estado !== 'pendiente' ? "<option value='1'>pendiente</option>" : ''}
										${estado !== 'aprobado' ? "<option value='2'>aprobado</option>" : ''}
										${estado !== 'suspendido' ? "<option value='3'>suspendido</option>" : ''}
									</select>
								</td>
								<td class="p-0">
									<i
										data-btn="borrar"
										data-btn-id="${usuario.id}"
										title="borrar usuario"
										class="bi bi-x-circle-fill btn text-danger fs-4"></i>
								</td>
							</tr>
		`
	})
	const etiquetasSelect = document.querySelectorAll('.form-select')
	const botonesEliminar = document.querySelectorAll('[data-btn="borrar"]')

	etiquetasSelect.forEach((etiqueta) =>
		etiqueta.addEventListener('change', (e) => {
			const nuevoEstado = etiqueta.options[etiqueta.selectedIndex].text
			const usuarioId = e.target.dataset.id
			cambiarEstadoUsuario(nuevoEstado, usuarioId)
		})
	)
	botonesEliminar.forEach((btn) =>
		btn.addEventListener('click', (e) => {
			const userId = e.target.dataset.btnId
			eliminarUsuarioStorage(userId)
		})
	)
}
