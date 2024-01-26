import { limpiarInputError } from "../utilidades/limpiarInputError.js";
import { mostrarInputError } from "../utilidades/mostrarInputError.js";
import { telefonoRegex } from "./telefonoRegex.js";

export const validarTelefono = (telefonoInput) =>{
    const telefonoValido = telefonoRegex.test(telefonoInput.value);
    if(!telefonoValido){
        mostrarInputError(telefonoInput);
        return false
    }else {
        limpiarInputError(telefonoInput);
    return true
    }
}