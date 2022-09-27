import React from 'react'

function ItemDetail(props) {
    return (
        <div className='cardDetailContainer'>
            <div className='box'><img src="" alt="" /></div>
            <div className='box'>
                <h1>{props.title}</h1>
                <p>{props.detail}</p>
            </div>
        </div>
    )
}

export default ItemDetail