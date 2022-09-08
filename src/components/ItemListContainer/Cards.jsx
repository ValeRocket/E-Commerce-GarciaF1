import "./ItemListContainer.css";

function Cards(props){
    let{img,title,price}=props
    return(
<div className="card cardsStyle" style={{width: 300}}>
        <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h3 className="card-text">${price}</h3>
        <a href="#" className="btn btn-primary">Comprar</a>
    </div>
</div>
    )
}



export default Cards