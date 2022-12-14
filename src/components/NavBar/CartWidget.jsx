import "./NavBar.css"
import React, { useContext } from "react";
import { cartCtx } from "../../context/cartContext";
import {Link} from "react-router-dom"

function CartWidget(){
const {getTotalItemsInCart} = useContext(cartCtx)

    return(
      <div >
        <Link to="/cart" className="iconMargin"><svg xmlns="http://www.w3.org/2000/svg" className="iconMargin icon icon-tabler icon-tabler-shopping-cart" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
      <span>{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</span>
      </Link>
      </div>
    
    )
}

export default CartWidget