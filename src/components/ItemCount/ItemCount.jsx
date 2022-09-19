import React from "react";
import swal from 'sweetalert';
import "./ItemCount.css"


function ItemCount(props){
const [count, setCount] = React.useState(props.initial)
console.log("stock:", props.stock)


  function handleClickSuma() {
    if(count == props.stock){
      swal({
        title: "No hay mas stock",
        icon: "error"
      });
  }else{
      setCount(count + 1);
    }
    props.stock = props.stock - count;
  }

  function handleClickResta() {
    if(count == 1){
      swal({
        title: "No puedes comprar menos de 1 producto",
        icon: "error"
      });
  }else{
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



