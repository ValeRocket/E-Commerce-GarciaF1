import Cards from "./Cards";
import data from "./ItemListContainer";


function ItemList(props){
    return(
        <div>
            <div className="cardsFlex" >
                {
                    props.data.map((item) =>{
                        return <Cards
                            id={item.id}
                            key={item.id}
                            price={item.price}
                            title={item.title}
                            img={item.img}
                    />
                    })
                }
            </div>
        </div>
    )
}

export default ItemList