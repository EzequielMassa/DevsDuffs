import { setearFavoritos } from "../../almacenamiento/setearFavoritos.js";
import { obtenerFavoritos } from "../../almacenamiento/obtenerFavoritos.js";
import { renderizarFavoritos } from "../../componentes/favoritos/renderizarFavoritos.js";

setearFavoritos();
console.log(obtenerFavoritos());

document.addEventListener("DOMContentLoaded",()=>{
renderizarFavoritos();
});

