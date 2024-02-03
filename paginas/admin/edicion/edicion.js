import { getCapitulos } from '../../../almacenamiento/getCapitulos.js'
import { renderizarNavbar } from '../../../componentes/navbar/navbar.js'
import { Capitulo } from '../../../paginas/admin/edicion/clases.js'
import { limpiarInputError } from '../../../utilidades/limpiarInputError.js'
import { mostrarInputError } from '../../../utilidades/mostrarInputError.js'

renderizarNavbar()
const cuerpoTabla = document.querySelector('#tablaCapitulosBody')
const modalNuevoCapitulo = new bootstrap.Modal(
	document.getElementById('nuevoCapituloModal')
)
const modalEditarCapitulo = new bootstrap.Modal(
	document.getElementById('editarCapituloModal')
)

let idCapituloUpdate = null

window.mostrarModalEditarCapitulo = (id) => {
	idCapituloUpdate = id
	const capitulos = getCapitulos()
	let index = capitulos.findIndex((item) => item.id == idCapituloUpdate)

	document.querySelector('#nombreCapituloEditado').value =
		capitulos[index].nombre
	document.querySelector('#temporadaCapituloEditado').selectedIndex =
		capitulos[index].temporada
	document.querySelector('#numeroCapituloEditado').value =
		capitulos[index].capitulo
	document.querySelector('#descripcionCapituloEditado').value =
		capitulos[index].descripcion
	document.querySelector('#imgUrlCapituloEditado').value =
		capitulos[index].imgUrl
	document.querySelector('#publicadoCapituloEditado').checked =
		capitulos[index].publicado

	modalEditarCapitulo.show()
}

const capituloUpdate = (event) => {
	event.preventDefault()
	const capitulos = getCapitulos()

	let index = capitulos.findIndex((item) => item.id == idCapituloUpdate)
	capitulos[index].nombre = document.querySelector(
		'#nombreCapituloEditado'
	).value
	capitulos[index].temporada = parseInt(
		document.querySelector('#temporadaCapituloEditado').selectedIndex
	)
	capitulos[index].capitulo = parseInt(
		document.querySelector('#numeroCapituloEditado').value
	)
	capitulos[index].descripcion = document.querySelector(
		'#descripcionCapituloEditado'
	).value
	capitulos[index].imgUrl = document.querySelector(
		'#imgUrlCapituloEditado'
	).value
	capitulos[index].publicado = document.querySelector(
		'#publicadoCapituloEditado'
	).checked

	localStorage.setItem('capitulos', JSON.stringify(capitulos))

	cargarTabla()
	modalEditarCapitulo.hide()
}

const cargarTabla = () => {
	const capitulos = getCapitulos()
	tablaCapitulosBody.innerHTML = ''

	capitulos.map((item) => {
		const fila = document.createElement('tr')
		const celdas = `<th>${item.id}</th>
      <td>${item.temporada}</td>
      <td>${item.capitulo}</td>
      <td>${item.nombre}</td>
      <td>${item.descripcion}</td>
      <td>${item.publicado ? '✅' : '❌'}</td>
      <td>
      <div class="d-flex gap-2 ">
      <button class="btn btn-primary" onclick="mostrarModalEditarCapitulo(${
				item.id
			})">
      ✎
      </button>
      <button class="btn btn-danger" onclick="eliminarCapitulo(${item.id})">
      🗑
      </button>
      <button class="btn btn-warning" onclick="agregarFavorito(${item.id})">
      ${
				item.favorito == true
					? `<i class="bi bi-star-fill"></i>`
					: `<i class="bi bi-star"></i>`
			}
      </button>
      </div>
      </td>
      `

		fila.innerHTML = celdas
		cuerpoTabla.append(fila)
	})
}

window.agregarFavorito = (idFavorito) => {
	const capitulos = getCapitulos()
	const capitulo = capitulos.find((cap) => cap.id == idFavorito)
	if (capitulo.favorito == true) {
		capitulo.favorito = false
		const indexCapitulo = capitulos.findIndex((cap) => cap.id == idFavorito)
		capitulos[indexCapitulo] = capitulo

		localStorage.setItem('capitulos', JSON.stringify(capitulos))
	} else {
		capitulo.favorito = true
		const indexCapitulo = capitulos.findIndex((cap) => cap.id == idFavorito)
		capitulos[indexCapitulo] = capitulo
		localStorage.setItem('capitulos', JSON.stringify(capitulos))
	}
	cargarTabla()
}

const agregarCapitulo = (event) => {
	event.preventDefault()

	let id = capitulos.at(-1).id + 1 //Se posiciona en el ultimo elemento del .json
	let nombreInput = document.querySelector('#nombreCapitulo')
	let temporadaInput = document.querySelector('#temporadaCapitulo')
	let numeroCapituloInput = document.querySelector('#numeroCapitulo')
	let descripcionInput = document.querySelector('#descripcionCapitulo')
	let imgUrlInput = document.querySelector('#imgUrlCapitulo')
	let publicadoInput = document.querySelector('#publicadoCapitulo')

	const esNombreValido = validarInput(nombreInput, 4, 25)
	const esTemporadaValida = validarInput(temporadaInput, 0, 25)
	const esNumeroValido = validarInput(numeroCapituloInput, 1, 100)
	const esDescripcionValida = validarInput(descripcionInput, 1, 255)
	const esImgValida = validarInput(imgUrlInput, 0, 500) //Hacer expresion regular para url de IMG

	if (
		esNombreValido &&
		esTemporadaValida &&
		esNumeroValido &&
		esDescripcionValida &&
		esImgValida
	) {
		capitulos.push(
			new Capitulo(
				id,
				temporadaInput.value,
				numeroCapituloInput.value,
				nombreInput.value,
				descripcionInput.value,
				imgUrlInput.value,
				publicadoInput.checked
			)
		)
		modalNuevoCapitulo.hide()
		nombreInput.classList.remove('is-valid')
		temporadaInput.classList.remove('is-valid')
		numeroCapituloInput.classList.remove('is-valid')
		descripcionInput.classList.remove('is-valid')
		imgUrlInput.classList.remove('is-valid')

		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Capitulo agregado Correctamente',
			showConfirmButton: false,
			timer: 1500,
		})
	}

	document.querySelector('#formNuevoCapitulo').reset()
	cargarTabla()
}

function validarInput(input, minLength, maxLength) {
	input
	const inputValor = input.value
	if (
		!inputValor ||
		inputValor.length < minLength ||
		inputValor.length > maxLength
	) {
		mostrarInputError(input)
		return false
	} else {
		limpiarInputError(input)
		return true
	}
}

window.eliminarCapitulo = (id) => {
	const capitulos = getCapitulos()
	let index = capitulos.findIndex((item) => item.id == id)

	Swal.fire({
		title: `Estas seguro de eliminar el Capítulo ${capitulos[index].capitulo}? `,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Si, estoy seguro!',
	}).then((result) => {
		if (result.isConfirmed) {
			capitulos.splice(index, 1)
			localStorage.setItem('capitulos', JSON.stringify(capitulos))
			cargarTabla()
			Swal.fire({
				title: 'Eliminado!',
				text: 'El capitulo se ha eliminado correctamente.',
				icon: 'success',
			})
		}
	})
}

cargarTabla()

document
	.querySelector('#formNuevoCapitulo')
	.addEventListener('submit', agregarCapitulo)
document
	.querySelector('#formEditarCapitulo')
	.addEventListener('submit', capituloUpdate)
