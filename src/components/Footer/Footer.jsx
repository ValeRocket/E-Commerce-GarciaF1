import "./Footer.css"

function Footer(){
    return(
        <footer class="text-center text-lg-start bg-white text-muted">
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>F1 Store
          </h6>
          <img className="imgLogo" src={require("./f1logo.png")} alt="Formula 1 Shop"/>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Productos
          </h6>
          <p>
            <a href="#!" class="text-reset">Remeras</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Gorras</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Buzos</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Cascos</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Cuadros</a>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i> Santiago del Estero 4200, Argentina</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            valentin.gar.56@gmail.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> +54 9 3856 243607</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4">
    © 2022 F1 STORE Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">F1STORE</a>
  </div>
</footer>
    )
}

export default Footer