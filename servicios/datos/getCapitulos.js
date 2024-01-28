/**
 * 
 * @returns Devuelve todos los capítulos almacenados en localStorage
 */

export const getCapitulos = () =>{
    const capitulosJson = localStorage.getItem("Capitulos");
    const capitulos = JSON.parse(capitulosJson)
    return capitulos
}