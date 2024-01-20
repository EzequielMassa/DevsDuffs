const nombreCapitulo = document.getElementById("nombreCapitulo");
const categoriaCapitulo = document.getElementById("categoriaCapitulo");
const descripcionCapitulo = document.getElementById("descripcionCapitulo");
const publicadoCapitulo = document.getElementById("publicadoCapitulo");

const nombreCapituloEditado = document.getElementById("nombreCapituloEditado");
const categoriaCapituloEditado = document.getElementById("categoriaCapituloEditado");
const descripcionCapituloEditado = document.getElementById("descripcionCapituloEditado");
const publicadoCapituloEditado = document.getElementById("publicadoCapituloEditado");

// Array de Capitulos (Ejemplos)
const capitulos = [
  {
    codigo: 1,
    nombre: "Hallowen",
    categoria: "Especial",
    descripcion: "Breve sinopsis del Capitulo",
    publicado: true,
    destacado: false,
  },
  {
    codigo: 2,
    nombre: "Navidad",
    categoria: "Especial",
    descripcion: "Breve sinopsis del Capitulo",
    publicado: true,
    destacado: false,
  },
];

// Variable que indica el indice de cada capitulo (Nos sirve para rastrear el episodio que vamos a editar, crear o borrar)
let capituloEditadoIndex;

// Utiliza forEach la cual recorre el array y nos muestra en la tabla cada capitulo proveniente del mismo
function mostrarCapitulos() {
  const tablaBody = document.getElementById("tablaCapitulosBody");
  tablaBody.innerHTML = "";

  capitulos.forEach((capitulo, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
            <td>${capitulo.codigo}</td>
            <td>${capitulo.nombre}</td>
            <td>${capitulo.categoria}</td>
            <td>${capitulo.descripcion}</td>
            <td>${capitulo.publicado ? "✅" : "❌"}</td>
            <td>
                <button class="btn btn-danger" onclick="borrarCapitulo(${index})">🗑</button>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarCapituloModal" onclick="editarCapitulo(${index})">✎</button>
                <button class="btn ${
                  capitulo.destacado ? "btn-warning" : "btn-secondary"
                }" onclick="alternarDestacado(${index})">
                ★
                </button>
            </td>
        `;
    tablaBody.appendChild(fila);
  });
}

// Guardamos a traves de constantes las propiedades de cada capitulo nuevo
function guardarNuevoCapitulo() {
  // Crear un nuevo objeto de capitulo
  const nuevoCapitulo = {
    codigo: capitulos.length + 1,
    nombre: nombreCapitulo.value,
    categoria: categoriaCapitulo.value,
    descripcion: descripcionCapitulo.value,
    publicado: publicadoCapitulo.checked,
    destacado: false, // Por defecto, el nuevo capitulo no está destacado
  };

  // Agregar el nuevo capitulo al array de capitulos
  capitulos.push(nuevoCapitulo);

  // Mostrar la tabla actualizada y cerrar el modal
  mostrarCapitulos();
  limpiarFormularioNuevoCapitulo();
  $("#nuevoCapituloModal").modal("hide"); // Cerrar el modal usando jQuery
}

// Funcion que me permite validar los imputs de los modales

function validacionInputNuevoCapitulo() {


  if ( (nombreCapitulo.value != "") && (nombreCapitulo.value.length >= 4) && (nombreCapitulo.value.length <= 20) ) {
    nombreCapitulo.className = "form-control is-valid";
  } else {
    nombreCapitulo.className = "form-control is-invalid";
  }


  if ((categoriaCapitulo.value != "") && (categoriaCapitulo.value.length >= 4) && (categoriaCapitulo.value.length <= 20) ){
    categoriaCapitulo.className = "form-control is-valid";
  }else{
    categoriaCapitulo.className = "form-control is-invalid";
  }

  if ( (descripcionCapitulo.value != "") && (descripcionCapitulo.value.length >= 4) && (descripcionCapitulo.value.length <= 155) ){
    descripcionCapitulo.className = "form-control is-valid";
  }else{
    descripcionCapitulo.className = "form-control is-invalid";
  }

  document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById("formNuevoCapitulo");
    formulario.addEventListener("submit", function() {
      formulario.reset();
    });
  });

}

// Función para abrir el modal con los datos del capitulo seleccionado para editar
function editarCapitulo(index) {
  capituloEditadoIndex = index; // Almacena el índice del capitulo que se está editando
  const capituloEditado = capitulos[index];

  // Lógica para cargar los datos del capitulo en los campos correspondientes del modal de edición
  nombreCapituloEditado.value = capituloEditado.nombre;
  categoriaCapituloEditado.value = capituloEditado.categoria;
  descripcionCapituloEditado.value = capituloEditado.descripcion;
  publicadoCapituloEditado.checked = capituloEditado.publicado;
}

// Función para guardar la edición de un capitulo
function guardarEdicionCapitulo() {
  nombreCapituloEditado.value;
  categoriaCapituloEditado.value;
  descripcionCapituloEditado.value;
  publicadoCapituloEditado.checked;

  // Validaciones

  // Actualizar los datos del capitulo editado
  const index = capituloEditadoIndex;
  capitulos[index].nombre = nombreCapituloEditado;
  capitulos[index].categoria = categoriaCapituloEditado;
  capitulos[index].descripcion = descripcionCapituloEditado;
  capitulos[index].publicado = publicadoCapituloEditado;

  // Mostrar la tabla actualizada y cerrar el modal
  mostrarCapitulos();
  limpiarFormularioEdicionCapitulo();
  $("#editarCapituloModal").modal("hide"); // Cerrar el modal usando jQuery
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
  nombreCapitulo.value = "";
  categoriaCapitulo.value = "";
  descripcionCapitulo.value = "";
  publicadoCapitulo.checked = false;
}

// Limpiamos el formulario de nuevo capitulo cuando terminamos de editar el anterior
function limpiarFormularioEdicionCapitulo() {
  nombreCapitulo.value = "";
  categoriaCapitulo.value = "";
  descripcionCapitulo.value = "";
  publicadoCapitulo.checked = false;
}

// Se utiliza pora inicializar la pagina
document.addEventListener("DOMContentLoaded", () => {
  mostrarCapitulos();
});
