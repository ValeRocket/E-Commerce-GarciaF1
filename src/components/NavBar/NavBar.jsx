import "./NavBar.css"
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"


function Navegacion(){
return(
<div className="">
    <nav className="navbar navbar-expand-lg navBackground">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">
            <img className="imgLogo" src={require("./f1logo.png")} alt="Formula 1 Shop"/>
            </Link>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link color" >Home</Link>
                    <Link to="/categoria/remeras" className="nav-item nav-link color">Remeras</Link>
                    <Link to="/categoria/gorras" className="nav-item nav-link color">Gorras</Link>
                    <Link to="/categoria/buzos" className="nav-item nav-link color">Buzos</Link>
                    <Link to="/categoria/cascos" className="nav-item nav-link color">Cascos</Link>
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