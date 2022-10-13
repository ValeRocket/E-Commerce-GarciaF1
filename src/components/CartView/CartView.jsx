import React from "react";
import { useContext } from "react";
import { cartCtx } from "../../context/cartContext";

function CartView() {
  const context = useContext(cartCtx);
  const { cart, deleteItem } = context;

  let carritovacio = false;

  if (carritovacio) {
    return <div>Tu carrito está vacio...</div>;
  }else{
    return (
      <div>
        {cart.map((props) => (
          <div>
            <p>{"Cantidad de Items: "+props.count}</p>
            <p>{"Precio $"+props.price}</p>
            <p>{"Total: "+props.price*props.count}</p>
            <button del={deleteItem}>Eliminar Items</button>
          </div>
        ))}
      </div>
    );
  }
  
}

export default CartView;