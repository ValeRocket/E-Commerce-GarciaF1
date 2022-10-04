import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import {Link} from "react-router-dom"

function Cards(props){
    let{img,title,price}= props
    const urlDetail = `/producto/${props.id}`

    return(
<div className="card cardsStyle" style={{width: 300}}>
        <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h3 className="card-text">${price}</h3>
        <a href="#" className="btn btn-primary">Agregar al carrito</a>
        <ItemCount initial={1} stock={10} />
        <Link to={urlDetail}>
        <button className="btn btn-primary">Ver mas</button>
        </Link>

    </div>
</div>
    )
}



export default Cards