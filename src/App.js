import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Marcas from './components/container/ItemListContainer';
import Card from './components/Card';

function App() {
  return (
<>
    <NavBar/>
    <Marcas greeting={'Las marcas con las que trabajamos'}></Marcas>
    <Footer/>
    <Card title='Mi titulo'></Card>
</>    
  );
}

export default App;
