import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import { AiOutlineShoppingCart } from "react-icons/ai"
import "./ItemDetail.css"

function ItemDetail(props) {

const [estadoCart, setEstadoCart] = React.useState(false);

const handleAddToCart = () => {
    setEstadoCart(true);
}   
    return (
        <div className="card cardsStyle" style={{width: 300}}>
            <div className='box'>
                <img src={props.img} className="card-img-top" alt="..."/>
                <h1 >{props.title}</h1>
                <p >{"$" + props.price}</p>
                <p>{props.detail}</p>
                
                {estadoCart === false ? <ItemCount onAddToCart={handleAddToCart} /> : <Link className='addCart btn btn-primary' to={"/cart"} >Ir al carrito</Link>}
            </div>
        </div>
    );
}

export default ItemDetail