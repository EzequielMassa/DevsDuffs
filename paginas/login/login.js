import { renderizarNavbar } from '../../componentes/navbar/navbar.js'
import { validarLogin } from '../../validadores/validarLogin.js'

renderizarNavbar()

const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const { email, password } = e.target
	validarLogin(email, password)
})
