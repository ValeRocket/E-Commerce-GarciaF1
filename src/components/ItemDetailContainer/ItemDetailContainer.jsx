import React, {useState, useEffect} from 'react';
import { getSingleItems } from '../services/mockAPI';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
let [data, setData] = useState({});
const [error, setError] = useState(false);
const { idItem } = useParams();
const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getSingleItems(idItem).then((respuestaDatos) => 
            setData(respuestaDatos))
            .catch((errormsg) =>{
                setError(errormsg.message)
            })
            .finally(() => setIsLoading(false));
    },[idItem]);

    if(isLoading){
        return (
            <>
              {error ? (
                <div>
                  <h2 style={{ color: "#aa0033" }}>Error obteniendo los datos</h2>
                  <p>{error}</p>
                </div>
              ) : (
                <h3>Cargando . . .</h3>
              )}
            </>
          );
    }

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