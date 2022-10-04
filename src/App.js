import './App.css';
import "./components/NavBar/NavBar.css"
import Navegacion from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetail from './components/ItemDetailContainer/ItemDetail';

function App() {
  return (
      <BrowserRouter>
        <Navegacion />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Formula 1 Store" />}/> 
            <Route path="/categoria/:cat" element={<ItemListContainer/>}/>
            <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
