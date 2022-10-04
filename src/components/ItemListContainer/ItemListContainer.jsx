import "./ItemListContainer.css"
import React from "react";
import ItemList from "./ItemList";
import getItems, { getItemsByCategory } from "../services/mockAPI";
import { useEffect } from "react";
import {useParams} from "react-router-dom"
import { Ring } from '@uiball/loaders'



function ItemListContainer(props){
    let {greeting} = props;
    const [data, setData] = React.useState([]);
    const[isLoading, setIsLoading] = React.useState(true)


    const {cat} = useParams()

    useEffect(() => {
        setIsLoading(true);
        if(cat === undefined){
            getItems().then((respuestaData) => setData(respuestaData))
            .finally(() => setIsLoading(false))
        }else{
            getItemsByCategory(cat).then((respuestaData) => setData(respuestaData))
            .finally(() => setIsLoading(false))
        }
        return () => {
            console.log("Componente Item List desmontado")
        }
    },[cat]);
    
    return(
        <div>     
                {isLoading && <Ring 
                size={40}
                lineWeight={5}
                speed={2} 
                color="black" 
                />}
            <h1 className="greeting">{greeting}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer