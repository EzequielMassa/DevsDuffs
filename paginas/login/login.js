import { obtenerUsuarios } from '../../almacenamiento/obtenerUsuarios.js'
import { renderizarNavbar } from '../../componentes/navbar/navbar.js'

renderizarNavbar()

function getUserFromLocalStorage() {
	const email = localStorage.getItem('email')
	const password = localStorage.getItem('password')
	return { email, password }
}

// Función para llenar automáticamente los campos de correo electrónico y contraseña si el usuario ha iniciado sesión anteriormente
function autoFillLoginForm() {
	const { email, password } = getUserFromLocalStorage()
	if (email && password) {
		document.getElementById('email').value = email
		document.getElementById('password').value = password
		// Simula el proceso de inicio de sesión con los datos guardados
		login(email, password)
	}
}

// Función para manejar el inicio de sesión
function handleLoginFormSubmission(event) {
	event.preventDefault()
	const email = document.getElementById('email').value
	const password = document.getElementById('password').value
	const user = obtenerUsuarios().find((usuario) => (usuario.email = email))
	console.log(user)
	// Guardar el correo electrónico y la contraseña en el almacenamiento local
	localStorage.setItem('email', email)
	localStorage.setItem('password', password)
	// Simular el proceso de inicio de sesión
	login(email, password)
}

// Función para el proceso de inicio de sesión
function login(email, password) {
	if (email === 'example@example.com' && password === 'password123') {
		// Si el correo electrónico y la contraseña son correctos, redirigir al usuario a otra página
		window.location.href = 'pagina_principal.html'
	} else {
		alert('Correo electrónico o contraseña inválidos')
	}
}

// Función para manejar el enlace de "Olvidé mi contraseña"
function handleForgotPasswordLink(event) {
	event.preventDefault()
	// Mostrar una alerta indicando que el usuario debe contactar para restablecer la contraseña
	alert('Por favor contáctenos para restablecer su contraseña')
}

// Función para agregar los detectores de eventos necesarios
function addEventListeners() {
	const loginForm = document.getElementById('loginForm')
	const forgotPasswordLink = document.getElementById('forgot-password-link')

	// Agregar evento de envío del formulario de inicio de sesión
	loginForm.addEventListener('submit', handleLoginFormSubmission)

	// Agregar evento al enlace "Olvidé mi contraseña"
	forgotPasswordLink.addEventListener('click', handleForgotPasswordLink)
}

// Llamar a la función para agregar detectores de eventos después de que el HTML se haya cargado por completo
document.addEventListener('DOMContentLoaded', addEventListeners)
