import "./ItemListContainer.css"
import Cards from "./Cards";

function ItemListContainer(props){
    let {greeting} = props;
    return(
        <div>
            <h1 className="greeting">{greeting}</h1>
            <div className="cardsFlex" >
                <Cards
                img="https://http2.mlstatic.com/D_NQ_NP_2X_886465-MLA45304794271_032021-F.webp"
                title="Chomba Redbull"
                price={6500}/>
                <Cards 
                img="https://http2.mlstatic.com/D_NQ_NP_2X_602794-MLA49952313270_052022-F.webp"
                title="Gorra Ferrari"
                price={3800}/>
                <Cards 
                img="https://http2.mlstatic.com/D_NQ_NP_720238-MLA50995928757_082022-O.webp"
                title="Buzo Mercedes"
                price={7900}/>
            </div>
        </div>
    )
}








export default ItemListContainer