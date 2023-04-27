import './App.css'
import Home from './components/homeCarpeta/Home'
import Sliders from "./components/homeCarpeta/Sliders";
import CardsRellenos from "./components/homeCarpeta/CardsRellenos";
import Clientes from "./components/homeCarpeta/Clientes";
import Formulario from "./components/homeCarpeta/Formulario";
import PiePagina from "./components/homeCarpeta/PiePagina";
import PreguntasFrecuentes from './components/homeCarpeta/PreguntasFrecuentes';


function App() {
  
  return (
    <>
      <Home/>
      <Sliders />
      <CardsRellenos/>
      <Clientes/>
      <PreguntasFrecuentes/>
      <Formulario/>
      <PiePagina/>
     
    </>
  )
}

export default App
