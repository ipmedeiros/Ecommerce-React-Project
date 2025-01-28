import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bem-vinda(a) à NerdPoint!" />
    </div>
  );
}

export default App;