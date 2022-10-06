import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail(props) {
  let estado = false;

function handleAddToCart(count){
    alert(`Agregaste al carrito ${count} item/s`)
}    
    return (
        <div className="card cardsStyle" style={{width: 300}}>
            <div className='box'>
                <img src={props.img} className="card-img-top" alt="..."/>
                <h1>{props.title}</h1>
                <p>{"$" + props.price}</p>
                <p>{props.detail}</p>
                
                {estado === false? <ItemCount stock={5} onAddToCart={handleAddToCart}/> : <Link to="/cart"><button className='btn btn-primary'>Finalizar Compra</button></Link>}
            </div>
        </div>
    );
}

export default ItemDetail