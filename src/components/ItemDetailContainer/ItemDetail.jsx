import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailContainer from './ItemDetailContainer'

function ItemDetail(props) {
    return (
        <div className='cardDetailContainer'>
            <div className='box'><img src="" alt="" /></div>
            <div className='box'>
                <h1>{props.title}</h1>
                <p>{props.price}</p>
                <p>{props.detail}</p>
                <ItemCount initial={1} stock={10} />
            </div>
        </div>
    )
}

export default ItemDetail