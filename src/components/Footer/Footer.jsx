import "./Footer.css"

function Footer(){
    return(
        <footer className="text-center text-lg-start bg-white text-muted">
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>F1 Store
          </h6>
          <img className="imgLogo" src={require("./f1logo.png")} alt="Formula 1 Shop"/>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Productos
          </h6>
          <p>
            <a href="#!" className="text-reset">Remeras</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Gorras</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Buzos</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Cascos</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Cuadros</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Santiago del Estero 4200, Argentina</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            valentin.gar.56@gmail.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> +54 9 3856 243607</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4">
    © 2022 F1 STORE Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">F1STORE</a>
  </div>
</footer>
    )
}

export default Footer