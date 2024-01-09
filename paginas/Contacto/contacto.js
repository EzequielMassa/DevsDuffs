


export function navOnline()
{
    

    navbarH.innerHTML = "";
    navbarH.innerHTML += `
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg sticky-top ">
    
        <a class="navbar-brand" href="/index.html"><img class="logo-nav" src="/recursos/media/img/Devs-Duff-Logo.png"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
       
      <div class="collapse  navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex col-12 align-items-center  flex-column  flex-lg-row  ">
        <div class="col-md-5 ">
        <ul class="navbar-nav text-center mb-2 mb-lg-0 ">
          <li class="nav-item ">
            <a class="nav-link nav-alink" aria-current="page" href="#"><label>Categoria</label></a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-alink" aria-current="page" href="#"><label>Nosotros</label></a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-alink " aria-current="page" href="../Contacto/contacto.html"><label>Contacto</label></a>
          </li>
        </ul>
        </div>
        <form class="d-flex col-md-4   justify-content-center align-content-center " role="search">
          <input class="form-control  " type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-warning" type="submit"><i class="bi bi-search"></i></button> 
        </form>
          <div class="col-md-3 d-flex flex-column flex-lg-row justify-content-evenly align-items-center">
            <button class=" btn btn-info btn-log align-items-md-center " type="submit">login</button>
            <button class="btn btn-success align-items-md-center " type="submit">Registro</button>
            <img class="img-login" src="../../recursos/media/img/homero-apuntando.png" alt="Homero de login">
            <button class="btn btn-warning align-items-md-center"><a class="setting-Adm " href=""><i class="bi bi-gear"></i></a></button>
        </div>
      </div>
   </div>
  </div>
  </nav>  
  `
};
const navbarH = document.getElementById("navbarH")
navOnline()