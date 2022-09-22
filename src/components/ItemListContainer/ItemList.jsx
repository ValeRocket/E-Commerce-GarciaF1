import Cards from "./Cards";
import data from "./ItemListContainer";


function ItemList(props){
    return(
        <div>
            <div className="cardsFlex" >
                {
                    props.data.map((item) =>{
                        console.log(item);
                        return <Cards
                            key={item.div}
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