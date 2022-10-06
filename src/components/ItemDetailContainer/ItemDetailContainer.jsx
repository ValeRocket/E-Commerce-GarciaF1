import React, {useState, useEffect} from 'react';
import { getSingleItems } from '../services/mockAPI';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
    let [data, setData] = useState({});

 const { idItem } = useParams()

    useEffect(() => {
        getSingleItems(idItem).then((respuestaDatos) => 
            setData(respuestaDatos));
    },[idItem]);

    return (
        <ItemDetail 
            key={data.id} 
            img={data.img}
            title={data.title}
            detail={data.detail}
            price={data.price}
            />
    )
}

export default ItemDetailContainer