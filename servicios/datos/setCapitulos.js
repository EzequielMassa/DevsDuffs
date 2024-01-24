import capitulos from "../datos/capitulos.json" assert { type: "json" };

export const setcapitulos = ()=> {
    const capitulos = JSON.parse(localStorage.getItem("capitulos")) || null
    if (!capitulos || capitulos?.lngth == 0) {
        localStorage.setItem("capitulos", JSON.stringify(capitulos))
    }
}