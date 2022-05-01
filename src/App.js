import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Marcas from './components/container/ItemListContainer';
import Card from './components/Card';
import Contador from './components/Contador';
import ItemListContainer from './components/container/ItemListContainer';

function App() {
  return (
<>
    <NavBar/>
    <ItemListContainer/>
    <Marcas greeting={'Las marcas con las que trabajamos'}></Marcas>
    <Footer/>
    <Card title='Mi titulo'></Card>
    <Contador/>
</>    
  );
}

export default App;
