import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail(props) {
    const[showItemCount, setShowItemCount] = useState(true)
//let estadoCart = false;

function handleAddToCart(count){
    alert(`Agregaste al carrito! ${count}`)
}    
    return (
        <div className='cardDetailContainer'>
            <div className='box'><img src="" alt="" /></div>
            <div className='box'>
                <img src={props.img} className="" alt="..."/>
                <h1>{props.title}</h1>
                <p>{"$" + props.price}</p>
                <p>{props.detail}</p>
                
                {showItemCount ? <ItemCount initial={1} stock={props.stock} onAddToCart={handleAddToCart}/>:
                <Link to="/cart"><button>Finalizar Compra</button></Link>}
            </div>
        </div>
    );
}

export default ItemDetail