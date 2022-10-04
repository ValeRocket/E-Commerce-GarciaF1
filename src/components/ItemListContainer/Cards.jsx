import "./ItemListContainer.css";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import {Link} from "react-router-dom"

function Cards(props){
    let{img,title,price} = props
    const urlDetail = `/producto/${props.id}-${props.title}`

    return(
<div className="card cardsStyle" style={{width: 300}}>
        <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h3 className="card-text">${price}</h3>
        <Link to={urlDetail}>
        <button className="btn btn-primary">Ver mas</button>
        </Link>

    </div>
</div>
    )
}



export default Cards