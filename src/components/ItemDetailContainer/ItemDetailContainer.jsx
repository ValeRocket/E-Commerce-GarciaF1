import React, {useState, useEffect} from 'react';
import { getSingleItems } from '../services/mockAPI';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    let [data, setData] = useState({});

    useEffect(() => {
        getSingleItems().then((respuestaDatos) => 
            setData(respuestaDatos));
    },[]);

    return (
        <ItemDetail 
            key={data.id} 
            title={data.title}
            detail={data.detail}/>
    )
}

export default ItemDetailContainer