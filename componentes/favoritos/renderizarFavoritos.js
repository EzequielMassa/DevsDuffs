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
           <div class="col-12 col-lg-8 col-md-10 my-5">
               <div class="card rounded-5 custom-bg-color card-index">
               <div class="contenedorImgCarousel">          
               <img src='${favorito.imgUrl}'
               class="card-img-top rounded-top-5 img-media"
               alt="capituloEspecial1." />
               </div>
                   <div class="card-body d-flex flex-column align-items-center justify-content-center">
                       <h5
                           class="tituloTarjetaSuperior fw-bold text-center text-md-start mt-1 mt-md-3 ms-md-3">
                          '${favorito.nombre}'
                       </h5>
                       <p class="parrafoCard card-text m-3 m-md-3 d-none d-md-block">
                         ${
                           favorito.descripcion
                         }
                       </p>
                       <a href="#" class="btn botonCarousel d-flex align-items-center justify-content-center"><i class="bi bi-play-fill"></i>Reproducir Capitulo</a>
                   </div>
               </div>
           </div>
       </div>
   </div>
    ` 
  });
}