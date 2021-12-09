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
  const [fichasAdivinadas , setFichasAdivinadas] = useState([])
  const [fichasAReiniciar , setFichasAReiniciar] = useState([])

  useEffect(() =>{
    estadoInicial()
    },[])
  
  const estadoInicial = () =>{
    setFichaElegida({})
    setPareja({})
    setFichasAdivinadas([])
    const mezclarAnimales = shuffleArray([...animales , ...animales]);
    setFichas(mezclarAnimales.map( (animal, index) => ({ index: index, animal}) ))
  }

  useEffect(() =>{
    compararFichas()
    verificarVictoria()
  },[pareja])

  const verificarVictoria = () =>{
    if (fichas.length != 0  && fichas.length == fichasAdivinadas.length){
      setTimeout(() => alert("Ganaste") , 1000)
    }
  }
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
    agregarParejaCorrecta()
    setPareja({})
    setFichaElegida({})
  };
  const agregarParejaCorrecta = () =>{
    fichasAdivinadas.push(fichaElegida.index , pareja.index)
  }
  const volverAVoltear = () => {
    setFichasVolteadas([fichaElegida.index , pareja.index])
    setPareja({})
    setFichaElegida({})
  };

  const reiniciarPartida = () =>{
    voltearParaReinicio()
    setTimeout(() => estadoInicial() , 1000)
  }
  const voltearParaReinicio = () =>{
      const fichasAReiniciar = fichasAdivinadas.concat([fichaElegida.index])
      setFichasAReiniciar(fichasAReiniciar)
  }

return (
  <div className = 'app'>
      <Header reiniciarPartida = {reiniciarPartida}/>
      <Tablero 
      fichas = {fichas} 
      clickearFicha={clickearFicha}
      parejasCorrectas={parejasCorrectas}
      fichasVolteadas = {fichasVolteadas}
      fichasAReiniciar = {fichasAReiniciar}
      />
    
  </div>




)

}

export default App;
