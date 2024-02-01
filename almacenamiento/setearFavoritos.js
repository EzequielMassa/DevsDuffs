export const setearFavoritos = () => {
  
  const favoritosDefault = [{
    temporada: 1,
    capitulo: 1,
    nombre: "Sin blanca Navidad",
    descripcion: "Cuando Homer no recibe ningún bono de vacaciones, espera ganar dinero extra convirtiéndose en un Papá Noel del centro comercial, en un intento de brindar a la familia unas felices vacaciones.",
    imgUrl: "./recursos/media/img/slideSuperior1.jpg",
    id: 1,
    publicado: true
  },
  {
    temporada: 1,
    capitulo: 2,
    nombre: "Bart, el genio",
    descripcion: "Bart termina en una escuela para niños superdotados después de hacer trampa en una prueba de coeficiente intelectual.",
    imgUrl: "./recursos/media/img/slideSuperior2.jpg",
    id: 2,
    publicado: false
  },
  {
    temporada: 1,
    capitulo: 3,
    nombre: "La odisea de Homero",
    descripcion: "Mientras la clase de Bart está recorriendo la planta de energía en una excursión, Homer choca un carro contra una tubería radiactiva. Como consecuencia, la planta se ve obligada a cerrar y Homer pierde su trabajo.",
    imgUrl: "./recursos/media/img/slideSuperior3.jpg",
    id: 3

  },]

  localStorage.setItem("favoritos", JSON.stringify(favoritosDefault));
};