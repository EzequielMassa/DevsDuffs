import { mostrarInputError } from "../utilidades/mostrarInputError.js";
import { limpiarInputError } from "../utilidades/limpiarInputError.js";

/* Validacion un nombre en un formulario. Retorna true si es un formato valido , false si no lo es.*/


export const validarNombre = (nombreInput) => {
const nombreValor = nombreInput.value

if (!nombreValor || nombreValor.lenght > 10){
    mostrarInputError(nombreInput);
    return false
}else{
    limpiarInputError(nombreInput);
    return true
}


}

