import { getCapitulos } from "../../almacenamiento/getCapitulos.js";

export const renderizarFavoritos = () => {
  const capitulos = getCapitulos().filter((cap) => cap.favorito == true);
  const carouselTarjetaContenedor = document.querySelector(`#carouselTarjetaContenedor`);
  const primerFavorito = capitulos[0];

  capitulos.forEach(cap => {
    return carouselTarjetaContenedor.innerHTML += `
    ${
       primerFavorito.id == cap.id
         ? '  <div class="carousel-item active">'
         : '<div class="carousel-item">'
     }
   
       <div class="row justify-content-center">
           <div class="col-12 col-lg-8 col-md-10 my-5">
               <div class="card rounded-5 custom-bg-color card-index m-2 p-2">
               <div class="contenedorImgCarousel object-fit-cover">          
               <img src='${cap.imgUrl}'
               class="card-img-top rounded-top-5 img-media"
               alt="capituloEspecial1." />
               </div>
                   <div class="card-body d-flex flex-column align-items-center justify-content-center">
                       <h5
                           class="tituloTarjetaSuperior fw-bold text-center text-md-start mt-1 mt-md-3 ms-md-3">
                          '${cap.nombre}'
                       </h5>
                       <p class="parrafoCard card-text m-3 m-md-3 d-none d-md-block">
                         ${
                          cap.descripcion
                         }
                       </p>
                       <a href="../paginas/detalleDeCategoria/detalleDeCategoria.html" class="btn botonCarousel d-flex align-items-center justify-content-center"><i class="bi bi-play-fill"></i>Reproducir Capitulo</a>
                   </div>
               </div>
           </div>
       </div>
   </div>
    ` 
  });
}