import "./ItemListContainer.css"
import React from "react";
import ItemList from "./ItemList";
import getItems from "../services/mockAPI";
import { useEffect } from "react";


function ItemListContainer(props){
    let {greeting} = props;

    let [data, setData] = React.useState([]);

    useEffect(() => {
        getItems().then((respuestaData) =>{
            setData(respuestaData)
        });
    },[]);
    
    return(
        <div>
            <h1 className="greeting">{greeting}</h1>
            <ItemList data={data}/>
        </div>
    )
}








export default ItemListContainer