const tablaUsuarios = document.querySelector('#tablaUsuarios')

/**
 * Renderiza un mensaje de error en la tabla de usuarios.
 *
 * @param {string} errorMsj - El mensaje de error a ser mostrado.
 * @return {void} No retorna nada.
 */

export const renderizarErrorFiltroUsuarios = (errorMsj) => {
	tablaUsuarios.innerHTML = ''
	tablaUsuarios.innerHTML += `
		<tr>
								<td colspan="5">
									<div class="d-flex align-items-center justify-content-evenly">
										<span
											class="text-warning px-2 mx-2 fs-2 fw-bold usuarios-filtro-error-text"
											>${errorMsj}</span
										>
										<img
											class="usuarios-filtro-error-img"
											src="../../../recursos/media/img/homero-error.png"
											alt="imagen no se encontraron resultados" />
									</div>
								</td>
							</tr>
	`
}
