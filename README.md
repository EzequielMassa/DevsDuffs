# DevsDuffs🍩
> Desde un diseño intuitivo, este sitio web brinda la posibilidad de disfrutar de tus episodios favoritos de Los Simpsons. Explora los capítulos disponibles, elige entre las hilarantes aventuras de Homero, Bart y compañía, y sumérgete en la nostalgia animada.

## Tabla de contenidos
* [Información del proyecto](#informacion)
* [Tecnologías utilizadas](#tecnologias)
* [Integrantes del equipo](#integrantes)

## Información del proyecto <a name="informacion"></a> 
  #### Deploy: https://devsduff.netlify.app/
  
  ### ¿Cómo se hace una copia de esté proyecto?
  - Copiar la siguiente URL: https://github.com/EzequielMassa/DevsDuffs.git
  - Abre la terminal en tu sistema operativo (puedes usar Git Bash en Windows, Terminal en macOS, o cualquier terminal en sistemas basados en Linux).
  - Usa el comando "cd" para cambiar al directorio en el que deseas almacenar el proyecto.
  - Utiliza el comando git clone seguido de la URL que copiaste anteriormente.
  - Presiona Enter y se descargará automáticamente el repositorio en tu máquina local.

  ### ¿Cómo se ve nuestro proyecto?
  ### Página principal:
  - Este sitio contiene un navbar fijo con el logo de Devs Duff; botones que redirigen a las siguientes páginas: Inicio, Temporadas, Sobre nosotros, Contacto, Registro y Iniciar sesión.
  - La página principal contiene una imagen principal que hace referencia al capítulo seleccionado como "favorito", con las siguientes propiedades: nombre del episodio, descripción y botón de "reproducir" que redirecciona a la página de la temporada donde está ubicado el capitulo seleccionado.
  - Debajo de la imagen destacada, se ubican las temporadas de la serie.
    
    <img src= "https://github.com/EzequielMassa/DevsDuffs/blob/dev/recursos/readme/paginaPrincipal.png"></img>
    
  - El footer contiene el copyright del sitio y los logos de las redes sociales (Facebook, Twitter y Instagram), además incluye el link hacia las paginas: Acerca de nosotros y Contacto.
    
### Página detalle de temporada:
- Al hacer clic en el botón  para "reproducir el capitulo favorito" o se seleccione una temporada de la página principal, se redireccionará a una página con el detalle de la misma (actualmente esta disponible los episodios de la temporada 1).
- Esta sección contiene: una imagen ilustrativa de la serie, un video que hace referencia a la clásica apertura de la misma, la sinopsis de la temporada y los capítulos con sus respectivos videos listos para ser reproducidos.

### Página de administración
- El navbar contiene los mismos botones que el de la página principal, pero cuando el usuario está logueado se añade el buscador de capítulos y en el caso de ingresar desde la cuenta del administrador, se añade un botón con opciones para gestionar el contenido y los usuarios del sitio web (oculto en la página de inicio).

<img src= "https://github.com/EzequielMassa/DevsDuffs/blob/dev/recursos/readme/navbar.png"></img>

- El administrador de capítulos contiene los siguientes elementos:

○ Tabla de temporadas con sus capítulos; la misma contiene los siguientes campos:
ID,
temporada,
capítulo,
nombre del episodio,
descripción,
publicado (campo booleano que hace referencia a la disponibilidad del capítulo).

○ Cada fila de la tabla tiene los elementos necesarios para realizar las siguientes
acciones: 
Botón para editar un capítulo (se despliega una ventana modal con todos los campos necesarios para editar el episodio),
para borrar un capítulo,
y un botón para destacar el capítulo (estrella).

## Otras páginas del sitio:

### Iniciar sesión: 
El formulario de login solicita al usuario un email y una contraseña (estos campos están correctamente validados); un link para registrarse en el sitio y dos extras para recuperar la contraseña e ingresar desde la cuenta de google, que actualmente redireccionan al Error 404.

### Registro: 
Este formulario permitirá registrar usuarios al sitio web, por lo tanto se solicitará todos los datos necesarios y estos serán enviados por mail al administrador del sitio.

### Contacto: 
Contiene un formulario de consulta totalmente validado. Una vez completado los campos, se envía la consulta vía mail al administrador del sitio.

### Sobre nosotros: 
Contiene la información del equipo de desarrollo, se puede acceder a este sitio a través del navbar o del footer.

### Error 404: 
Todos los botones que no cumplan una función específica se redireccionan a este sitio.

### Página de administración de usuarios
Una vez que un usuario completa el formulario de registro, en la web del administrador además de la administración de los capítulos tendrá disponible una
tabla para administrar los usuarios:

El proceso es el siguiente:

○ Al completar el formulario de registro, el usuario que aún no está validado (es decir que no puede loguearse en nuestro sitio web) quedará a disposición del administrador para modificar su estado (aprobado, pendiente o suspendido).

○ Los usuarios que completaron su registro aparecerán en la tabla de usuarios con un estado pendiente.

○ El administrador puede modificar su estado aprobado o suspendido.

○ Un usuario que está aprobado podrá loguearse y será redireccionado a la web principal, que contendrá además un mensaje de bienvenida al usuario logueado.

○ Cualquier usuario que esté logueado tendrá disponible la opción para cerrar su sesión.


## Tecnologías utilizadas <a name="tecnologias"></a>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">

## Integrantes del equipo <a name="integrantes"></a>
- Ezequiel Massa: https://github.com/EzequielMassa | https://www.linkedin.com/in/ezequiel-massa-dev/
- Georgina Costilla: https://github.com/georginacostilla | https://www.linkedin.com/in/georgina-costilla/
- Andrea Orlandi: https://github.com/AndiOrlandi | https://www.linkedin.com/in/andreajosefinaorlandi/
- Julian Martin: https://github.com/JulianMartin98 | https://www.linkedin.com/in/julian-martin-9903aa1ba/
- Santiago Romero: https://github.com/Santiago9813 | https://www.linkedin.com/in/santi-romero-237085180/
- Matias Paz: https://github.com/MPaz-17P | https://www.linkedin.com/in/matias-andres-paz-62074a25a/
