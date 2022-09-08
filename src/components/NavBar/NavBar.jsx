import "./NavBar.css"
import CartWidget from "./CartWidget";


function Navegacion(){
return(
<div className="">
    <nav className="navbar navbar-expand-lg navBackground">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">
            <img className="imgLogo" src={require("./f1logo.png")} alt="Formula 1 Shop"/>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link color" >Home</a>
                    <a href="#" className="nav-item nav-link color">Remeras</a>
                    <a href="#" className="nav-item nav-link color">Gorras</a>
                    <a href="#" className="nav-item nav-link color">Buzos</a>
                    <a href="#" className="nav-item nav-link color">Cascos</a>
                    <a href="#" className="nav-item nav-link color">Cuadros</a>
                </div>
                <div className="navbar-nav ms-auto">
                    <CartWidget/>
                </div>
            </div>
        </div>
    </nav>
</div>
)
}
export default Navegacion;