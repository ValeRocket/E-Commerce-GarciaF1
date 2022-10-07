import "./ItemListContainer.css"
import React from "react";
import ItemList from "./ItemList";
import getItems, { getItemsByCategory } from "../services/mockAPI";
import { useEffect } from "react";
import {useParams} from "react-router-dom"

function ItemListContainer(props){
    let {greeting} = props;
    const [data, setData] = React.useState([]);

    const {cat} = useParams()

    useEffect(() => {
        if(cat === undefined){
            getItems().then((respuestaData) => setData(respuestaData))
        }else{
            getItemsByCategory(cat).then((respuestaData) => setData(respuestaData))
        }
    },[cat]);
    
    return(
        <div>     
            <h1 className="greeting">{greeting}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer