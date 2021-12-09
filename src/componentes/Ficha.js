import '../estilos/Ficha.css';
import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Ficha = ({id , animal , clickearFicha , parejasCorrectas, fichasVolteadas}) => {
    const [volteada , setVolteada] = useState()
    const [adivinada , setAdivinada] = useState(false)

    useEffect(() => {
        if (fichasVolteadas.includes(id)){
            setTimeout(() => setVolteada(false) , 500)
        }
    }, [fichasVolteadas])
    
    useEffect(() => {
        if (parejasCorrectas.includes(id)){
            setTimeout(() => setAdivinada(true) , 500)
        }
    }, [parejasCorrectas])

    const voltear = e =>{
            if (clickearFicha(id, animal)){
            setVolteada(!volteada)}
    }
    return(
        <div className="ficha" onClick = {adivinada ? null : voltear}>
            <ReactCardFlip isFlipped = {volteada}>
                <div className = 'dorso-ficha'>???</div>
                <div className = 'cara-ficha'>{animal}</div>    
            </ReactCardFlip>  
        </div>
    )
    
}

    export default Ficha;