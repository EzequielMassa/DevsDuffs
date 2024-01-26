import { limpiarInputError } from "../../utilidades/limpiarInputError.js";
import { mostrarInputError } from "../../utilidades/mostrarInputError.js";
import { validarEmail } from "../../validadores/validarEmail.js";
import { validarNombre } from "../../validadores/validarNombre.js";
import { validarTelefono } from "../../validadores/validarTelefono.js";
import { validarEdad } from "../../validadores/validarEdad.js";


const formContacto = document.getElementById("formContacto");
formContacto.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const{
        nombreContacto, emailContacto, telContacto, edadContacto, opinion
    } = e.target
    
    const sonCamposValidos = validarCampos(nombreContacto,emailContacto,telContacto, edadContacto, opinion )
    if(sonCamposValidos){
        formContacto.reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "formulario enviado con exito.",
            showConfirmButton: false,
            timer: 1500
          });
    }     
} ) 

const validarCampos = (nombre , email, telefono, edad, opinion) =>{
   
 const esNombreValido =  validarNombre(nombre) 
 const esEmailValido = validarEmail(email.value)
    if(!esEmailValido){
        mostrarInputError(email);
    }else{
        limpiarInputError(email)
    }
    
  const esTelefonoValido = validarTelefono(telefono);
  const esOpinionValida = opinion.value
  if(!esOpinionValida){
    Swal.fire({
        title: "Por favor seleccione una opcion.",
        icon: "warning"
      });
     
  }
  const esEdadValida =  validarEdad(edad);
    return (esNombreValido && esEmailValido && esTelefonoValido && esEdadValida && esOpinionValida) 
}
