import './App.css';
import "./components/NavBar/NavBar.css"
import Navegacion from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <Navegacion />
      <ItemListContainer greeting="Formula 1 Store" />
      <ItemDetailContainer/>
      <Footer />
    </div>
    
   
  );
}

export default App;
