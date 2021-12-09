import React , {useEffect, useState} from 'react';
import Header from './componentes/Header'
import './App.css';
import Tablero from './componentes/Tablero'

const animales = [...'🦊🦁🐶🐴🐷🐮🐭🐰'];

const App = () =>{
  
  
  const [fichas , setFichas] = useState([]);
  const [fichaElegida , setFichaElegida] = useState({})
  const [pareja , setPareja] = useState({})
  const [fichasVolteadas , setFichasVolteadas] = useState([])
  const [parejasCorrectas , setParejasCorrectas] = useState([])

  useEffect(() =>{
    const mezclarAnimales = shuffleArray([...animales , ...animales]);
    setFichas(mezclarAnimales.map( (animal, index) => ({ index: index, animal}) ))
  },[])

  useEffect(() =>{
    console.log("comparanding")
    compararFichas()
  },[pareja])

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

 const clickearFicha = (index , animal) =>{
    if(fichaElegida.index == index){
      return false
    }
    if(!fichaElegida.animal){
      setFichaElegida({index, animal})
      
    }
    else if (!pareja.animal){
      setPareja({index, animal})
    }

    return true
  }

  const compararFichas = () =>{
    if (fichaElegida.animal && pareja.animal){
      (fichaElegida.animal == pareja.animal) ? parejaCorrecta() : volverAVoltear()
    }
  }
  const parejaCorrecta = () => {
    setParejasCorrectas([fichaElegida.index , pareja.index])
    setPareja({})
    setFichaElegida({})
  };
  const volverAVoltear = () => {
    setFichasVolteadas([fichaElegida.index , pareja.index])
    setPareja({})
    setFichaElegida({})
  };

return (
  <div className = 'app'>
    
      <Tablero 
      fichas = {fichas} 
      clickearFicha={clickearFicha}
      parejasCorrectas={parejasCorrectas}
      fichasVolteadas = {fichasVolteadas}
      />
    
  </div>




)

}

export default App;
