// Array de Capitulos (Ejemplos)
const capitulos = [
    { codigo: 1, nombre: 'Hallowen', categoria: 'Especial', descripcion: 'Breve sinopsis del Capitulo', publicado: true, destacado: false},
    { codigo: 2, nombre: 'Navidad', categoria: 'Especial', descripcion: 'Breve sinopsis del Capitulo', publicado: true, destacado: false},
];

// Variable que indica el indice de cada capitulo (Nos sirve para rastrear el episodio vamos a editar, crear o borrar)
let capituloEditadoIndex;

// Utiliza forEach la cual recorre el array y nos muestra en la tabla cada capitulo proveniente del mismo
function mostrarCapitulos() {
    const tablaBody = document.getElementById('tablaCapitulosBody');
    tablaBody.innerHTML = '';

    capitulos.forEach((capitulo, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${capitulo.codigo}</td>
            <td>${capitulo.nombre}</td>
            <td>${capitulo.categoria}</td>
            <td>${capitulo.descripcion}</td>
            <td>${capitulo.publicado ? '✅' : '❌'}</td>
            <td>
                <button class="btn btn-danger" onclick="borrarCapitulo(${index})">🗑</button>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarCapituloModal" onclick="editarCapitulo(${index})">✎</button>
                <button class="btn ${capitulo.destacado ? 'btn-warning' : 'btn-secondary'}" onclick="alternarDestacado(${index})">
                ★
                </button>
            </td>
        `;
        tablaBody.appendChild(fila);
    });
}

// Guardamos a traves de constantes las propiedades de cada capitulo nuevo
function guardarNuevoCapitulo() {
    const nombreCapitulo = document.getElementById('nombreCapitulo').value;
    const categoriaCapitulo = document.getElementById('categoriaCapitulo').value;
    const descripcionCapitulo = document.getElementById('descripcionCapitulo').value;
    const publicadoCapitulo = document.getElementById('publicadoCapitulo').checked;
        
    // Crear un nuevo objeto de capitulo
    const nuevoCapitulo = {
        codigo: capitulos.length + 1, // Puedes ajustar la lógica para generar códigos únicos
        nombre: nombreCapitulo,
        categoria: categoriaCapitulo,
        descripcion: descripcionCapitulo,
        publicado: publicadoCapitulo,
        destacado: false, // Por defecto, el nuevo capitulo no está destacado
    };

    // Agregar el nuevo capitulo al array de capitulos
    capitulos.push(nuevoCapitulo);

    // Mostrar la tabla actualizada y cerrar el modal
    mostrarCapitulos();
    limpiarFormularioNuevoCapitulo();
    $('#nuevoCapituloModal').modal('hide'); // Cerrar el modal usando jQuery
}

// Función para abrir el modal con los datos del capitulo seleccionado para editar
function editarCapitulo(index) {
    capituloEditadoIndex = index; // Almacena el índice del capitulo que se está editando
    const capituloEditado = capitulos[index];

    // Lógica para cargar los datos del capitulo en los campos correspondientes del modal de edición
    document.getElementById('nombreCapituloEditado').value = capituloEditado.nombre;
    document.getElementById('categoriaCapituloEditado').value = capituloEditado.categoria;
    document.getElementById('descripcionCapituloEditado').value = capituloEditado.descripcion;
    document.getElementById('publicadoCapituloEditado').checked = capituloEditado.publicado;
}

// Función para guardar la edición de un capitulo
function guardarEdicionCapitulo() {
    const nombreCapituloEditado = document.getElementById('nombreCapituloEditado').value;
    const categoriaCapituloEditado = document.getElementById('categoriaCapituloEditado').value;
    const descripcionCapituloEditado = document.getElementById('descripcionCapituloEditado').value;
    const publicadoCapituloEditado = document.getElementById('publicadoCapituloEditado').checked;

    // Validaciones (puedes agregar más según tus necesidades)

    // Actualizar los datos del capitulo editado
    const index = capituloEditadoIndex;
    capitulos[index].nombre = nombreCapituloEditado;
    capitulos[index].categoria = categoriaCapituloEditado;
    capitulos[index].descripcion = descripcionCapituloEditado;
    capitulos[index].publicado = publicadoCapituloEditado;

    // Mostrar la tabla actualizada y cerrar el modal
    mostrarCapitulos();
    limpiarFormularioEdicionCapitulo();
    $('#editarCapituloModal').modal('hide'); // Cerrar el modal usando jQuery
}

// Sirve para borrar un capitulo de nuestro array
function borrarCapitulo(index) {
    capitulos.splice(index, 1);
    mostrarCapitulos();
}

// Alternamos cada capitulo para poder mostrarlo como destacado o no
function alternarDestacado(index) {
    capitulos[index].destacado = !capitulos[index].destacado; // Invertir el estado de destacado
    mostrarCapitulos();
}

// Limpiamos el formulario de nuevo capitulo cuando terminamos de crear el anterior
function limpiarFormularioNuevoCapitulo() {
    document.getElementById('nombreCapitulo').value = '';
    document.getElementById('categoriaCapitulo').value = '';
    document.getElementById('descripcionCapitulo').value = '';
    document.getElementById('publicadoCapitulo').checked = false;
}

// Limpiamos el formulario de nuevo capitulo cuando terminamos de editar el anterior
function limpiarFormularioEdicionCapitulo() {
    document.getElementById('nombreCapitulo').value = '';
    document.getElementById('categoriaCapitulo').value = '';
    document.getElementById('descripcionCapitulo').value = '';
    document.getElementById('publicadoCapitulo').checked = false;
}

// Se utiliza pora inicializar la pagina
document.addEventListener('DOMContentLoaded', () => {
    mostrarCapitulos();
});