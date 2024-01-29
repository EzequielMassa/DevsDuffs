import { limpiarInputError } from "../utilidades/limpiarInputError.js";
import { mostrarInputError } from "../utilidades/mostrarInputError.js";
import { edadRegex } from "./edadRegex.js";

/*Valida la edad con una expresion regular.*/

export const validarEdad = (edadInput) =>{
    const edadValor = parseInt(edadInput.value);
    const formatoEdadValido = edadRegex.test(edadValor);
    if(!formatoEdadValido || edadValor < 6 || edadValor > 99){
        mostrarInputError(edadInput)
        return false 
    } else{
        limpiarInputError(edadInput)
       return true 
    } 

   
}