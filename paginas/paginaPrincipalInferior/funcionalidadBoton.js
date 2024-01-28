let miBoton = document.getElementById('miBoton');
let boton404 = document.getElementById('boton404');


miBoton.addEventListener('click', function() {
    window.location.href = '/paginas/detalleDeCategoria/detalleDeCategoria.html';
});


boton404.addEventListener('click', function() {
    window.location.href = ''; //colocar la ruta del 404 
});