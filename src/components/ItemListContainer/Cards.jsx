import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

function Cards(props){
    let{img,title,price}=props
    return(
<div className="card cardsStyle" style={{width: 300}}>
        <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h3 className="card-text">${price}</h3>
        <ItemCount initial={1} stock={10} />
        <a href="#" className="btn btn-primary">Agregar al carrito</a>
    </div>
</div>
    )
}



export default Cards