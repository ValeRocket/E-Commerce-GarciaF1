import './App.css';
import "./components/NavBar/NavBar.css"
import Navegacion from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartContextProvider from "./context/cartContext";
import CartView from "./components/CartView/CartView";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navegacion />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Formula 1 Store" />}/> 
            <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
            <Route path="/producto/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartView />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
