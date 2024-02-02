import { getCapitulos } from "../../almacenamiento/getCapitulos.js"

const capitulosContenedor = document.querySelector("#accordionFlushExample")

export const renderizarCapitulos = () => {
    const capitulos = getCapitulos().filter((cap) => cap.temporada == 1)
    capitulosContenedor.innerHTML = ""
    capitulos.forEach(cap => {
        capitulosContenedor.innerHTML += `
        <div class="accordion-item">
					<h2 class="accordion-header">
						<button class="accordion-button collapsed colorCapitulos" type="button"
							data-bs-toggle="collapse" data-bs-target="${'#flush-collapse' + cap.capitulo}" aria-expanded="false"
							aria-controls="${'#flush-collapse' + cap.capitulo}">
							Capitulo ${cap.capitulo} - ${cap.nombre}
						</button>
					</h2>
					<div id="${'flush-collapse' + cap.capitulo}" class="accordion-collapse collapse text-center mb-3"
						data-bs-parent="#accordionFlushExample">
						<div class="accordion-body">Reproducir aqui:</div>
						<iframe width="560" height="315"
							src= '${cap.videoUrl}'
							title="YouTube video player" frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen class="video">
						</iframe>
					</div>
		</div>
        `
    });
}