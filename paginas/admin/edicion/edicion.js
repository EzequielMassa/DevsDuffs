import { mostrarInputError } from "../../../utilidades/mostrarInputError.js";
import { limpiarInputError } from "../../../utilidades/limpiarInputError.js";
import capitulos from "../../../datos/capitulos.json" assert {type: "json"};
import { Capitulo } from "../../../paginas/admin/edicion/clases.js";


const cuerpoTabla = document.querySelector('#tablaCapitulosBody');
const modalNuevoCapitulo = new bootstrap.Modal(document.getElementById('nuevoCapituloModal'));
const modalEditarCapitulo = new bootstrap.Modal(document.getElementById('editarCapituloModal'));

let idCapituloUpdate = null;


window.mostrarModalEditarCapitulo = (id) => {
  idCapituloUpdate = id;
  let index = capitulos.findIndex((item) => item.id == idCapituloUpdate);

  document.querySelector('#nombreCapituloEditado').value = capitulos[index].nombre;
  document.querySelector('#temporadaCapituloEditado').value = capitulos[index].temporada;
  document.querySelector('#numeroCapituloEditado').value = capitulos[index].numeroCapitulo;
  document.querySelector('#descripcionCapituloEditado').value = capitulos[index].descripcion;
  document.querySelector('#imgUrlCapituloEditado').value = capitulos[index].imgUrl;

  modalEditarCapitulo.show();

};


const capituloUpdate = (event) => {
  event.preventDefault();

  let index = capitulos.findIndex((item) => item.id == idCapituloUpdate);
  capitulos[index].nombre = document.querySelector('#nombreCapituloEditado').value;
  capitulos[index].temporadadocument.querySelector('#temporadaCapituloEditado').value;
  capitulos[index].numeroCapitulo = document.querySelector('#numeroCapituloEditado').value;
  capitulos[index].descripcion = document.querySelector('#descripcionCapituloEditado').value;
  capitulos[index].imgUrl = document.querySelector('#imgUrlCapituloEditado').value;
  

  cargarTabla();
  modalEditarCapitulo.hide();
};





const cargarTabla = () => {

  tablaCapitulosBody.innerHTML = '';

  capitulos.map((item) => {
    const fila = document.createElement('tr');

    const celdas = `<th>${item.id}</th>
      <td>${item.temporada}</td>
      <td>${item.capitulo}</td>
      <td>${item.nombre}</td>
      <td>${item.descripcion}</td>
      <td>${item.publicado?"✅" : "❌"}</td>
      <td>
      <div class="d-flex gap-2 ">
      <button class="btn btn-primary" onclick="mostrarModalEditarCapitulo(${item.id})">
      ✎
      </button>
      <button class="btn btn-danger" onclick="eliminarCapitulo(${item.id})">
      🗑
      </button>
      <button class="btn btn-warning">
      ★
      </button>
      </div>
      </td>
      `;

    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  })
};


const agregarCapitulo = (event) => {
  event.preventDefault();


  let id = capitulos.at(-1).id + 1;      //Se posiciona en el ultimo elemento del .json
  let nombreInput = document.querySelector('#nombreCapitulo');
  let temporadaInput = document.querySelector('#temporadaCapitulo');
  let numeroCapituloInput = document.querySelector('#numeroCapitulo');
  let descripcionInput = document.querySelector('#descripcionCapitulo');
  let imgUrlInput = document.querySelector('#imgUrlCapitulo');
  let publicadoInput = document.querySelector('#publicadoCapitulo');
  console.log(publicadoInput.checked);



  const esNombreValido = validarInput(nombreInput, 4, 25);
  const esTemporadaValida = validarInput(temporadaInput, 0, 25);
  const esNumeroValido = validarInput(numeroCapituloInput, 1, 100);
  const esDescripcionValida = validarInput(descripcionInput, 1, 255);
  const esImgValida = validarInput(imgUrlInput, 0, 500);      //Hacer expresion regular para url de IMG

  if (esNombreValido && esTemporadaValida && esNumeroValido && esDescripcionValida && esImgValida) {
    capitulos.push(new Capitulo(id, temporadaInput.value, numeroCapituloInput.value, nombreInput.value, descripcionInput.value, imgUrlInput.value));
    modalNuevoCapitulo.hide();
    nombreInput.classList.remove('is-valid');
    temporadaInput.classList.remove('is-valid');
    numeroCapituloInput.classList.remove('is-valid');
    descripcionInput.classList.remove('is-valid');
    imgUrlInput.classList.remove('is-valid');

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Capitulo agregado Correctamente",
      showConfirmButton: false,
      timer: 1500
    });
  }

  document.querySelector('#formNuevoCapitulo').reset();
  cargarTabla();

};

function validarInput(input, minLength, maxLength) {
  (input);
  const inputValor = input.value
  if (!inputValor || inputValor.length < minLength || inputValor.length > maxLength) {
    mostrarInputError(input);
    return false;
  } else {
    limpiarInputError(input);
    return true;
  }
}


window.eliminarCapitulo = (id) => {

  let index = capitulos.findIndex((item) => item.id == id);

  //Colocar el sweetalert
  // Swal.fire({
  //   title: "Estas seguro de eliminar un capitulo?",
  //   icon: "warning",
  //   showCancelButton: true,
  //   confirmButtonColor: "#3085d6",
  //   cancelButtonColor: "#d33",
  //   confirmButtonText: "Si, estoy seguro!"
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     Swal.fire({
  //       title: "Eliminado!",
  //       text: "El capitulo se ha eliminado correctamente.",
  //       icon: "success"
  //     });
  //   }
  // });

  let validar = confirm(`Esta seguro que desea eliminar el capitulo ${capitulos[index].capitulo}?`);

  if (validar) {
    capitulos.splice(index, 1);
    cargarTabla();
  }

};

cargarTabla();


document.querySelector('#formNuevoCapitulo').addEventListener('submit', agregarCapitulo);
document.querySelector('#formEditarCapitulo').addEventListener('submit', capituloUpdate);







// const modalEditarCapitulo = new bootstrap.Modal(document.getElementById('editarCapituloModal'))


// let codigoCapituloEditado=null

// window.mostrarModalEditarCapitulo = (codigo) =>{

//   codigoCapituloEditado=codigo;

//   let index = capitulos.findIndex((capitulo)=>capitulo.codigo==codigoCapituloEditado);    //Obtengo la posicion del Capitulo
// console.log(index+1);
// document.getElementById("nombreCapituloEditado").value=capitulos[index].nombre
// document.getElementById("categoriaCapituloEditado").value=capitulos[index].categoria
// document.getElementById("descripcionCapituloEditado").value=capitulos[index].descripcion
// document.getElementById("publicadoCapituloEditado").value=capitulos[index].publicado


//   modalEditarCapitulo.show()

// }


// const nombreCapitulo = document.getElementById("nombreCapitulo");
// const categoriaCapitulo = document.getElementById("categoriaCapitulo");
// const descripcionCapitulo = document.getElementById("descripcionCapitulo");
// const publicadoCapitulo = document.getElementById("publicadoCapitulo");

// const nombreCapituloEditado = document.getElementById("nombreCapituloEditado");
// const categoriaCapituloEditado = document.getElementById("categoriaCapituloEditado");
// const descripcionCapituloEditado = document.getElementById("descripcionCapituloEditado");
// const publicadoCapituloEditado = document.getElementById("publicadoCapituloEditado");

// const form = document.getElementById("formNuevoCapitulo");
// const modalNuevoCapitulo = new bootstrap.Modal(document.getElementById('nuevoCapituloModal'));



// // Array de Capitulos (Ejemplos)
// const capitulos = [
//   {
//     codigo: 1,
//     nombre: "Hallowen",
//     categoria: "Especial",
//     descripcion: "Breve sinopsis del Capitulo",
//     publicado: true,
//     destacado: false,
//   },
//   {
//     codigo: 2,
//     nombre: "Navidad",
//     categoria: "Especial",
//     descripcion: "Breve sinopsis del Capitulo",
//     publicado: true,
//     destacado: false,
//   },
// ];

// // Variable que indica el indice de cada capitulo (Nos sirve para rastrear el episodio que vamos a editar, crear o borrar)
// let capituloEditadoIndex;

// // Utiliza forEach la cual recorre el array y nos muestra en la tabla cada capitulo proveniente del mismo
// function mostrarCapitulos() {
//   const tablaBody = document.getElementById("tablaCapitulosBody");
//   tablaBody.innerHTML = "";

//   capitulos.forEach((capitulo, index) => {
//     const fila = document.createElement("tr");
//     fila.innerHTML = `
//             <td>${capitulo.codigo}</td>
//             <td>${capitulo.nombre}</td>
//             <td>${capitulo.categoria}</td>
//             <td>${capitulo.descripcion}</td>
//             <td>${capitulo.publicado ? "✅" : "❌"}</td>
//             <td>
//                 <button class="btn btn-danger" onclick="eliminarCapitulo(${capitulo.codigo})">🗑</button>
//                 <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarCapituloModal" onclick="mostrarModalEditarCapitulo(${capitulo.codigo})">✎</button>
//                 <button class="btn ${capitulo.destacado ? "btn-warning" : "btn-secondary"
//       }" onclick="alternarDestacado(${index})">
//                 ★
//                 </button>
//             </td>
//         `;
//     tablaBody.appendChild(fila);
//   });
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const {
//     nombreCapitulo, categoriaCapitulo, descripcionCapitulo
//   } = e.target

//   const nombreValido = validarInput(nombreCapitulo, 4, 25);
//   const categoriaValido = validarInput(categoriaCapitulo, 4, 25);
//   const descripcionValido = validarInput(descripcionCapitulo, 4, 155);

//   if (nombreValido && categoriaValido && descripcionValido) {
//     guardarNuevoCapitulo(nombreCapitulo.value, categoriaCapitulo.value, descripcionCapitulo.value);
//     form.reset();
//   } else {
//   }
// })

// //Crear un nuevo objeto de capitulo
// function guardarNuevoCapitulo(nombre, categoria, descripcion) {

//   const nuevoCapitulo = {
//     codigo: capitulos.length + 1,
//     nombre: nombre,
//     categoria: categoria,
//     descripcion: descripcion,
//     publicado: publicadoCapitulo.checked,
//     destacado: false, // Por defecto, el nuevo capitulo no está destacado
//   };

//   // Agregar el nuevo capitulo al array de capitulos
//   capitulos.push(nuevoCapitulo);
//   Swal.fire({
//     position: "top-end",
//     icon: "success",
//     title: "Se ha agregado un nuevo Capitulo",
//     showConfirmButton: false,
//     timer: 1500
//   });


// //Mostrar la tabla actualizada
// (modalNuevoCapitulo);
//   mostrarCapitulos();
//   modalNuevoCapitulo.hide();    //Verificar el evento hide (Corregir que queda el checked)
// }

// // Funcion que me permite validar los imputs del modal nuevoCapitulo


// //Funcion que nos permite eliminar un capitulo de nuestra tabla
// window.eliminarCapitulo = (codigo)=>{

//     let index = capitulos.findIndex((capitulo)=>capitulo.codigo==codigo)    //Obtengo la posicion del Capitulo

//     let validarEliminar=confirm(`Estas segur@ de eliminar un capitulo ${capitulos[index].codigo}?`)
//     if(validarEliminar){
//       capitulos.splice(index, 1);
//       mostrarCapitulos();
//     }

// }

// //Funcion para editar un capitulo con un modal
// const editarCapitulo = (e) => {
//   e.preventDefault();
//   let index = capitulos.findIndex((capitulo)=>capitulo.codigo==codigoCapituloEditado);
//   capitulos[index].nombre=document.getElementById("nombreCapituloEditado").value
//   capitulos[index].categoria=document.getElementById("categoriaCapituloEditado").value
//   capitulos[index].descripcion=document.getElementById("descripcionCapituloEditado").value
//   capitulos[index].publicado=document.getElementById("publicadoCapituloEditado").value

//   (modalEditarCapitulo);
//   mostrarCapitulos();
//   modalEditarCapitulo.hide();    //Verificar el evento hide (Corregir que queda el checked)
// }



// // Función para abrir el modal con los datos del capitulo seleccionado para editar
// // function editarCapitulo(index) {
// //   capituloEditadoIndex = index; // Almacena el índice del capitulo que se está editando
// //   const capituloEditado = capitulos[index];

// //   // Lógica para cargar los datos del capitulo en los campos correspondientes del modal de edición
// //   nombreCapituloEditado.value = capituloEditado.nombre;
// //   categoriaCapituloEditado.value = capituloEditado.categoria;
// //   descripcionCapituloEditado.value = capituloEditado.descripcion;
// //   publicadoCapituloEditado.checked = capituloEditado.publicado;
// // }

// // // Función para guardar la edición de un capitulo
// // function guardarEdicionCapitulo() {
// //   nombreCapituloEditado.value;
// //   categoriaCapituloEditado.value;
// //   descripcionCapituloEditado.value;
// //   publicadoCapituloEditado.checked;

// //   // Validaciones

// //   // Actualizar los datos del capitulo editado
// //   const index = capituloEditadoIndex;
// //   capitulos[index].nombre = nombreCapituloEditado;
// //   capitulos[index].categoria = categoriaCapituloEditado;
// //   capitulos[index].descripcion = descripcionCapituloEditado;
// //   capitulos[index].publicado = publicadoCapituloEditado;

// //   // Mostrar la tabla actualizada y cerrar el modal
// //   mostrarCapitulos();
// //   limpiarFormularioEdicionCapitulo();
// //   $("#editarCapituloModal").modal("hide"); // Cerrar el modal usando jQuery
// // }

// // // Sirve para borrar un capitulo de nuestro array
// // // function borrarCapitulo(index) {
// // //   capitulos.splice(index, 1);
// // //   mostrarCapitulos();
// // // }

// // // Alternamos cada capitulo para poder mostrarlo como destacado o no
// // function alternarDestacado(index) {
// //   capitulos[index].destacado = !capitulos[index].destacado; // Invertir el estado de destacado
// //   mostrarCapitulos();
// // }

// // Limpiamos el formulario de nuevo capitulo cuando terminamos de editar el anterior
// function limpiarFormularioEdicionCapitulo() {
//   nombreCapitulo.value = "";
//   categoriaCapitulo.value = "";
//   descripcionCapitulo.value = "";
//   publicadoCapitulo.checked = false;
// }

// // Se utiliza pora inicializar la pagina
// document.addEventListener("DOMContentLoaded", () => {
//   mostrarCapitulos();
// });


// document.querySelector("formEditarCapitulo").addEventListener("submit",editarCapitulo);