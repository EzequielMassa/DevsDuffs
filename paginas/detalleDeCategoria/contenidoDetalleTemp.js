import { renderizarNavbar } from '../../componentes/navbar/navbar.js'

renderizarNavbar()

let contenidoTemporada = document.getElementById(`contenidoTemporada`)
let listaDetalleDeTemp = document.getElementById('listaDetalleDeTemp')
let comentarioUno = document.getElementById(`comentarioUno`)
let comentarioDos = document.getElementById(`comentarioDos`)
let comentarioTres = document.getElementById(`comentarioTres`)
let ul = document.createElement('ul')

contenidoTemporada.innerText = `La primera temporada de "Los Simpson" presenta a la familia Simpson y la vida en la ciudad de Springfield. A través de episodios cómicos, se exploran las dinámicas familiares y se
establece el tono satírico de la serie. Aunque la animación es más básica, la temporada sienta las bases para el éxito duradero de "Los Simpson".`

let elementosLista = [
	'Año: 1989 - 1990',
	'Cadena: FOX, FOX España, Antena 3',
	'País: Estados Unidos',
	'Género: comedia familiar',
	'Calificación: no recomendada a menores de 12 años',
	'Capítulos: 13',
	'⭐⭐⭐',
]

elementosLista.forEach(function (elemento) {
	let li = document.createElement('li')
	li.appendChild(document.createTextNode(elemento))
	ul.appendChild(li)
})

listaDetalleDeTemp.appendChild(ul)

comentarioUno.innerText = `Muy buena página! me gusto cómo organizan los episodios, fácil de encontrar lo que busco. 📺👍`
comentarioDos.innerText = `Descubrí esta página y me gusto bastante, la voy a recomendar a mis amigos! Interfaz fácil, info increíble. 🤓✨`
comentarioTres.innerText = `¡Increíble página para fans de Los Simpson! La disposición de los episodios por temporadas facilita la navegación. Ya la tengo marcada como mi favorita. 🌟📰`
