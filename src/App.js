import './App.css';
import "./components/NavBar/NavBar.css"
import Navegacion from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navegacion />
      <ItemListContainer greeting="Formula 1 Store" />
    </div>
    
   
  );
}

export default App;
