import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { cartCtx } from "../../context/cartContext";

function ItemDetail(props) {
const { addItem } = useContext(cartCtx);
const [isInCart, setIsInCart] = useState(false);

function handleAddToCart(count) {
    addItem(props,count)
    setIsInCart(true);
}   
    return (
        <div className="card cardsStyle" style={{width: 300}}>
            <div className='box'>
                <img src={props.img} className="card-img-top" alt="..."/>
                <h1 >{props.title}</h1>
                <p >{"$" + props.price}</p>
                <p>{props.detail}</p>
                
                {props.stock === 0 && (
                <span style={{ color: "#aa0033" }}>Producto sin stock</span>
            )}
            {isInCart ? (
                <Link to="/cart">Ir al carrito</Link>
            ) : (
                <ItemCount stock={5} onAddToCart={handleAddToCart} />
            )}
            </div>
        </div>
    );
}

export default ItemDetail