import { cerrarSesion } from '../../almacenamiento/cerrarSesion.js'
import { obtenerUsuarioLogueado } from '../../almacenamiento/obtenerUsuarioLogueado.js'
import capitulos from '/datos/capitulos.json' assert { type: 'json' }

const header = document.querySelector('header')
const resultadosContenedor = document.querySelector(
	'.busqueda-resultados-contenedor'
)

/**
 * Renderiza el navbar basada en el usuario logeado  y la pagina  actual.
 * @return {void} - No retorn nada.
 */
export const renderizarNavbar = () => {
	const usuarioLogeado = obtenerUsuarioLogueado()
	const registroUrl = window.location.href.includes('registro')

	header.innerHTML = `

	  <nav class="spikes navbar navbar-principal navbar-expand-md" >
				<div class="container-fluid">
					<a class="navbar-brand" href="/index.html"
						><img
							class="navbar-principal-imagen"
							src="/recursos/media/img/Devs-Duff-Logo.png"
							alt="imagen logo de devsduff"
					/></a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<div class="navbar-toggler-icon"></div>
					</button>
					<div
						class="collapse navbar-collapse align-items-center justify-content-md-evenly px-3"
						id="navbarSupportedContent">
						<ul class="navbar-nav mb-0 align-items-center">
							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="/index.html">Inicio</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/index.html#temporadas">Temporadas</a>
							</li>

							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="/paginas/sobreNosotros/sobreNosotros.html">Nosotros</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="/paginas/contacto/contacto.html">Contacto</a>
							</li>
						</ul>
						<form
							class="d-flex mx-auto pe-2 navbar-principal-formulario my-2 mb-md-0">
							<input
								class="form-control me-2 focus-ring focus-ring-warning"
								type="search"
								placeholder="Buscar capitulos"
								aria-label="Search"
								id='inputBusqueda' />
			
								<i class="bi bi-search"></i>
						
						</form>
						${
							usuarioLogeado
								? `<div class="dropdown-center text-center py-2 py-md-0">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<img
									class="navbar-principal-usuario-imagen"
									src="/recursos/media/img/donut.png"
									alt="imagen opciones de usuario" />
								Opciones
							</a>
							<ul
								class="dropdown-menu dropdown-menu-light dropdown-menu-end"
								aria-labelledby="navbarDropdown">
								${
									usuarioLogeado.rol === 'admin'
										? `
												<li>
									<a class="dropdown-item" href="/paginas/admin/edicion/edicion.html"
										>Administrar contenido <i class="bi bi-gear-fill"></i
									></a>
								</li>
								<li>
									<a class="dropdown-item" href="/paginas/admin/usuarios/usuarios.html"
										>Administrar usuarios <i class="bi bi-gear-fill"></i
									></a>
								</li>
								<li><hr class="dropdown-divider" /></li>
									`
										: ''
								}
					
								<li>
									<button class="dropdown-item btn btn-warning" id='btnCerrarSesion'>
									Cerrar sesion
									<i class="bi bi-box-arrow-right"></i
									></button>
								</li>
							</ul>
						</div>`
								: `<a href='/paginas/login/login.html' class='nav-link btn'>Iniciar Sesion <i class='bi bi-box-arrow-left'></i></a>`
						}
					</div>
				</div>
			</nav>
 `
	const inputBusqueda = document.querySelector('#inputBusqueda')

	inputBusqueda.addEventListener('keyup', (e) => {
		if (e.target.value != '') {
			buscar(e.target.value)
		} else {
			resultadosContenedor.innerHTML = ''
			resultadosContenedor.classList.remove(
				'busqueda-resultados-contenedor--show'
			)
		}
	})

	const btnCerrarSesion = document.querySelector('#btnCerrarSesion')
	if (btnCerrarSesion) {
		btnCerrarSesion.addEventListener('click', () => {
			cerrarSesion()
		})
	}
}

/**
 * Filtra los capitulos la temporada 1 y nombre o numero de episodio de la misma y renderiza los resultados.
 * @param {string} elemento - La palabra a buscar.
 */
function buscar(elemento) {
	const resultado = capitulos.filter(
		(capitulo) =>
			(capitulo.temporada == 1 &&
				capitulo.nombre.toLowerCase().includes(elemento.toLowerCase())) ||
			(capitulo.temporada == 1 && capitulo.capitulo == elemento)
	)

	if (resultado.length < 1) {
		resultadosContenedor.classList.add('busqueda-resultados-contenedor--show')
		resultadosContenedor.innerHTML = `
				<a
				href="#"
				class="list-group-item list-group-item-action"
				aria-current="true">
			No se encontraron resultados
			<img src='/recursos/media/img/homero-error.png' alt='imagen no se encontraron resultados' />
			</a>
		`
	} else {
		renderizarResultadosBusqueda(resultado)
	}
}

function renderizarResultadosBusqueda(listaResultados) {
	resultadosContenedor.classList.add('busqueda-resultados-contenedor--show')
	resultadosContenedor.innerHTML = ''

	listaResultados.forEach((resultado) => {
		resultadosContenedor.innerHTML += `
		<a
				href="/paginas/detalleDeCategoria/detalleDeCategoria.html"
				class="list-group-item list-group-item-action"
				aria-current="true">
				${resultado.nombre}
				<img src='${resultado.imgUrl}' alt='imagen resultado busqueda' />
			</a>
`
	})
}
