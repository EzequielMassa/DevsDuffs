function setearFavoritos (){
  const favoritosDefault = [{
    temporada: 1,
    capitulo: 1,
    nombre: "Sin blanca Navidad",
    descripcion: "Cuando Homer no recibe ningún bono de vacaciones, espera ganar dinero extra convirtiéndose en un Papá Noel del centro comercial, en un intento de brindar a la familia unas felices vacaciones.",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BZGZjNzZhNzAtYTZjNi00YjU4LWI0NTYtNjZmYWNkYTA2YzY3XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX200_CR0,0,200,112_AL_.jpg",
    id: 1,
    publicado: true
  },
  {
    temporada: 1,
    capitulo: 2,
    nombre: "Bart, el genio",
    descripcion: "Bart termina en una escuela para niños superdotados después de hacer trampa en una prueba de coeficiente intelectual.",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4OTI5MDM0OV5BMl5BanBnXkFtZTgwNTE1NjQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
    id: 2,
    publicado: false
  },
  {
    temporada: 1,
    capitulo: 3,
    nombre: "La odisea de Homero",
    descripcion: "Mientras la clase de Bart está recorriendo la planta de energía en una excursión, Homer choca un carro contra una tubería radiactiva. Como consecuencia, la planta se ve obligada a cerrar y Homer pierde su trabajo.",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MjQ0Njg1MF5BMl5BanBnXkFtZTgwMzg2NTQ2MjE@._V1_UX200_CR0,0,200,112_AL_.jpg",
    id: 3

  },]

  localStorage.setItem("favoritos", JSON.stringify(favoritosDefault));
};

setearFavoritos();
console.log(obtenerFavoritos());

function obtenerFavoritos(){
  const favoritosUsuarios = JSON.parse(localStorage.getItem("favoritos"));
  return favoritosUsuarios;
};

function renderizarFavoritos(){
  const carouselTarjetaContenedor = document.querySelector(`#carouselTarjetaContenedor`);
  const favoritos = obtenerFavoritos();
  const primerFavorito = favoritos[0];

  favoritos.forEach(favorito => {
    return carouselTarjetaContenedor.innerHTML += `
    ${
       primerFavorito.id == favorito.id
         ? '  <div class="carousel-item active">'
         : '<div class="carousel-item">'
     }
   
       <div class="row justify-content-center">
           <div class="col-12 col-md-8">
               <div class="card mb-2 mt-5 mb-5 rounded-5 custom-bg-color card-index">
               <div class="contenedorImgCarousel img-media">               
               <img src='${favorito.imgUrl}'
               class="card-img-top rounded-top-5 img-media"
               alt="capituloEspecial1." />
               </div>

                   <div class="card-body">
                       <h5
                           class="tituloTarjetaSuperior fw-bold text-center text-md-start mt-1 mt-md-3 ms-md-3">
                          '${favorito.nombre}'
                       </h5>
                       <p class="parrafoCard card-text m-3 m-md-3">
                         '${
                           favorito.descripcion
                         }'
                       </p>
                       <a class="btn btn-info titulo d-block botonPlay me-2" href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width="45"
                               height="45" fill="#fee622" class="bi bi-play-btn"
                               viewBox="0 0 16 16">
                               <path
                                   d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                               <path
                                   d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                           </svg>
                           <span class="">Reproducir Capitulo</span>
                       </a>
                   </div>
               </div>
           </div>
       </div>
   </div>
    ` 
  });
};


document.addEventListener("DOMContentLoaded",()=>{
renderizarFavoritos();
});




// <div class="carousel-item">
// <div class="row justify-content-center">
//     <div class="col-12 col-md-8">
//         <div class="card mb-2 mt-5 mb-5 rounded-5 custom-bg-color card-index">
//                 class="card-img-top rounded-top-5 img-media"
//                 alt="${favorito.nombre}" />
//             <div class="card-body">
//                 <h5
//                     class="tituloTarjetaSuperior fw-bold text-center text-md-start mt-1 mt-md-3 ms-md-3">
//                     Capitulo Numero: ${favorito.capitulo}
//                 </h5>
//                 <p class="parrafoCard card-text m-3 m-md-3">
//                 ${favorito.descripcion}
//                 </p>
//                 <a class="btn btn-info titulo d-block botonPlay me-2" href="#">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="45"
//                         height="45" fill="#fee622" class="bi bi-play-btn"
//                         viewBox="0 0 16 16">
//                         <path
//                             d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
//                         <path
//                             d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
//                     </svg>
//                     <span class="">Reproducir Capitulo</span>
//                 </a>
//             </div>
//         </div>
//     </div>
// </div>
// </div>


