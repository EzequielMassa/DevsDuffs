/**
 * Cierra la sesion del usuario removiendo del local storage la key "usuarioLogeado" y redirecciona al index.
 */
export const cerrarSesion = () => {
	localStorage.removeItem('usuarioLogueado')
	window.location.href = '/index.html'
}
