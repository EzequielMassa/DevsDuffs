import capitulosDatos from "../datos/capitulos.json" assert { type: "json" };

export const setcapitulos = ()=> {
    const capitulos = JSON.parse(localStorage.getItem("capitulos")) || null
    if (!capitulos || capitulos?.length == 0) {
        localStorage.setItem("capitulos", JSON.stringify(capitulosDatos))
    }
}