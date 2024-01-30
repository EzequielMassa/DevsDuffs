let contenidoTemporada = document.getElementById(`contenidoTemporada`);
let listaDetalleDeTemp = document.getElementById('listaDetalleDeTemp');
let ul = document.createElement('ul');

contenidoTemporada.innerText= `La primera temporada de "Los Simpson" presenta a la familia Simpson y la vida en la ciudad de Springfield. A través de episodios cómicos, se exploran las dinámicas familiares y se
establece el tono satírico de la serie. Aunque la animación es más básica, la temporada sienta las bases para el éxito duradero de "Los Simpson".`

let elementosLista = [
    "Año: 1989 - 1990",
    "Cadena: FOX, FOX España, Antena 3",
    "País: Estados Unidos",
    "Género: comedia familiar",
    "Calificación: no recomendada a menores de 12 años",
    "Capítulos: 13",
    "⭐⭐⭐"
];

elementosLista.forEach(function (elemento) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(elemento));
    ul.appendChild(li);
});

listaDetalleDeTemp.appendChild(ul);