import React, {useState, useEffect} from 'react';
import { getSingleItems } from '../services/mockAPI';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
    let [data, setData] = useState({});

    const params = useParams()
    const id = params.id

    useEffect(() => {
        getSingleItems(id).then((respuestaDatos) => 
            setData(respuestaDatos));
    },[id]);

    return (
        <ItemDetail 
            img={data.img}
            key={data.id} 
            title={data.title}
            detail={data.detail}
            price={data.price}
            />
    )
}

export default ItemDetailContainer