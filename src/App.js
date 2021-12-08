import React , {useEffect, useState} from 'react';
import Ficha from './componentes/Ficha'
import Header from './componentes/Header'
import './App.css';
import Tablero from './componentes/Tablero'

const animales = [...'🦊🦁🐶🐴🐷🐮🐭🐰'];

const App = () =>{
  
  
  const [fichas , setFichas] = useState([]);

  useEffect(() =>{
    const mezclarAnimales = shuffleArray([...animales , ...animales]);
    setFichas(mezclarAnimales.map( (animal, index) => ({ index: index, animal}) ))
  },[])

  const shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

return (
  <div className = 'app'>
    <div>
      <Tablero fichas = {fichas}/>
    </div>
  </div>




)

}

export default App;
