import Cards from "./Cards";


function ItemList({ data }) {
    return(
        <div>
            <div className="cardsFlex" >
                {
                    data.map((item) =>{
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