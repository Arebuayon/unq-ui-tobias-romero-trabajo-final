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
  const [estaComparando , setEstaComparando] = useState(false)
  const [partidaGanada , setPartidaGanada] = useState(false)

  useEffect(() =>{
    estadoInicial()
    },[])
  
  const estadoInicial = () =>{
    setFichaElegida({})
    setFichasVolteadas([])
    setFichasAdivinadas([])
    const mezclarAnimales = shuffleArray([...animales , ...animales]);
    setFichas(mezclarAnimales.map( (animal, index) => ({ index: index, animal}) ))
    setEstaComparando(false)
    setPareja({})
  }

  useEffect(() =>{
    compararFichas()
    verificarVictoria()
  },[pareja])

  const verificarVictoria = () =>{
    if (fichas.length != 0  && fichas.length == fichasAdivinadas.length){
      setPartidaGanada(true)
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
    if(fichaElegida.index == index || estaComparando ){
      return false
    }
    
    if(!fichaElegida.animal){
      setFichaElegida({index, animal})
      
    }
    else if (!pareja.animal){
      setPareja({index, animal})
      setEstaComparando(true)
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
    setTimeout(() => setEstaComparando(false) , 1000)
  };
  const agregarParejaCorrecta = () =>{
    fichasAdivinadas.push(fichaElegida.index , pareja.index)
  }
  const volverAVoltear = () => {
    setFichasVolteadas([fichaElegida.index , pareja.index])
    setPareja({})
    setFichaElegida({})
    setTimeout(() => setEstaComparando(false) , 1000)
    
  };

  const reiniciarPartida = () =>{
    setPartidaGanada(false)
    voltearParaReinicio()
    setEstaComparando(true)
    setTimeout(() => estadoInicial() , 400)
  }
  const voltearParaReinicio = () =>{
      const fichasAReiniciar = fichasAdivinadas.concat([fichaElegida.index])
      setFichasAReiniciar(fichasAReiniciar)
  }

return (
  <div className = 'app'>
  {partidaGanada && 
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Has Ganado!</h4>
        <p>Conseguiste encontrar todas las parejas!!!!!</p>
      </div> }
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
