import React from "react";
import "./ItemCount.css"


function ItemCount(props){
const [count, setCount] = React.useState(props.initial)
console.log("stock:", props.stock)


  function handleClickSuma() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }

  function handleClickResta() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return(
    <div className="botonera">
      <div>
      <button onClick={handleClickResta} type="button" className="btn btn-outline-">-</button>
      <span>{count}</span>
      <button onClick={handleClickSuma} type="button" className="btn btn-outline-">+</button>
      </div>
    </div>
  )
}

export default ItemCount



