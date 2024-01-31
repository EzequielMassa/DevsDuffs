/**
 * 
 * @returns Devuelve todos los capítulos almacenados en localStorage
 */

export const getCapitulos = () =>{
    const capitulosJSON = localStorage.getItem("capitulos");
    const capitulos = JSON.parse(capitulosJSON)
    return capitulos
}