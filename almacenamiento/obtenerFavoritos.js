export const obtenerFavoritos = () => {
  const favoritosUsuarios = JSON.parse(localStorage.getItem("favoritos"));
  return favoritosUsuarios;
};