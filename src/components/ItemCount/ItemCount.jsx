import React from "react";
import { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import "./ItemCount.css"


function ItemCount({onAddToCart}) {

  const [values, setValues] = useState({ contador: 1, stock: 5 });
  const onAdd = () => {
      if (values.contador < 5) {
          setValues({ contador: values.contador + 1, stock: values.stock - 1 });
      }
      if (values.stock <= 1) {
          alert('No podes sumar mas productos', {
              position: "top-left",
              autoClose: 800,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              className: 'toastify-warning'
              });
      }
  }

  const onDel = () => {
      if (values.contador > 1) {
          setValues({ contador: values.contador - 1, stock: values.stock + 1 });
      }
  }

  return (
      <div className='count-container'>
          <div className='item-count-container'>
              <button
                  className='btn-resta'
                  onClick={onDel}
                  variant="dark">-</button>
              <span className='contador'>{values.contador}</span>
              <button
                  className='btn-suma'
                  onClick={onAdd}
                  variant="dark">+</button>
          </div>
          <div className='stock'>
              Stock: {values.stock}
          </div>
          <button onClick={() => onAddToCart(values.contador)} variant='dark' className='btn btn-primary'>
                <AiOutlineShoppingCart className="cart-icon-button addCart" />
                Agregar al carrito
            </button>
          <div>
    </div>

      </div>
  );
}

export default ItemCount


