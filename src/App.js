import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Marcas from './components/container/ItemListContainer';
import Card from './components/Card';
import Contador from './components/Contador';
import ItemListContainer from './components/container/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokeContainer from './components/pokemon/PokeContainer';
import RobotDetail from './components/robots/RobotDetail';
import RobotsContainer from './components/robots/RobotsContainer'

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Card title='Mi titulo'></Card>
        <Routes>
          <Route path='/pokemon' element={<PokeContainer/>}/>
          <Route path='/robots' element={<RobotsContainer/>}/>
          <Route path='/robots/:robotId' element={<RobotDetail/>}/>
        </Routes>      
        <ItemListContainer/>
        <Marcas greeting={'Las marcas con las que trabajamos'}></Marcas>        
        <Contador/>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
