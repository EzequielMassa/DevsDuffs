import { obtenerFavoritos } from "../../almacenamiento/obtenerFavoritos.js";

export const renderizarFavoritos = () => {
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
               <div class="contenedorImgCarousel">          
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
                         ${
                           favorito.descripcion
                         }
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