const header = document.querySelector('header')

export const renderizarNavbar = () => {
	// const usuarioLogeado = obtenerUsuarioLogeado()
	const registroUrl = window.location.href.includes('registro')

	const usuarioLogeado = false
	const usuarioRol = 'admin'

	header.innerHTML = `
	    ${
				!registroUrl
					? '<nav class="navbar navbar-principal navbar-expand-md rounded-1" >'
					: '<nav class="navbar navbar-principal--registro navbar-expand-md rounded-1" >'
			}
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
								class="form-control me-2"
								type="search"
								placeholder="Buscar"
								aria-label="Search" />
							<button class="btn btn-buscar" type="submit" title="buscar">
								<i class="bi bi-search"></i>
							</button>
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
								Usuario
							</a>
							<ul
								class="dropdown-menu dropdown-menu-light dropdown-menu-end"
								aria-labelledby="navbarDropdown">
								${
									usuarioRol === 'admin'
										? `
												<li>
									<a class="dropdown-item" href="#"
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
									<a class="dropdown-item" href="#"
										>Cerrar sesion <i class="bi bi-box-arrow-right"></i
									></a>
								</li>
							</ul>
						</div>`
								: `<a href='/paginas/login/login.html' class='nav-link btn'>Iniciar Sesion <i class='bi bi-box-arrow-left'></i></a>`
						}
					</div>
				</div>
			</nav>
 `
}
