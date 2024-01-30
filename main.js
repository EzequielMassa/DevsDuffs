import {setcapitulos} from "./servicios/datos/setCapitulos.js"
setcapitulos();


import { setearFavoritos } from "./almacenamiento/setearFavoritos.js";
import { obtenerFavoritos } from "./almacenamiento/obtenerFavoritos.js";
import { renderizarFavoritos } from "./componentes/favoritos/renderizarFavoritos.js";



document.addEventListener("DOMContentLoaded",()=>{
  renderizarFavoritos();
  });
  
setearFavoritos();


