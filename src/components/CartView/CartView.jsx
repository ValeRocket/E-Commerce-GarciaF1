import React from "react";
import { useContext } from "react";
import { cartCtx } from "../../context/cartContext";

function CartView() {
  const context = useContext(cartCtx);
  const { cart, clearCart, removeFromCart } = context;

  let carritovacio = false;

  if (carritovacio) {
    return <div>Tu carrito está vacio...</div>;
  }

  return (
    <div>
      {cart.map((props) => (
        <div>
          <h3>{"Productos: " + props.title}</h3>
          <p>{"Precio $"+props.price}</p>
          <p>{"Cantidad: "+props.count}</p>
          <p>{"Total: "+props.price*props.count}</p>
          
        </div>
      ))}
    </div>
  );
}

export default CartView;