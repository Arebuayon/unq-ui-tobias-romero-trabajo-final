import '../estilos/Ficha.css';
import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Ficha = ({id , animal}) => {
    const [volteada , setVolteada] = useState()

    useEffect(() =>{
        if(volteada){
            console.log("ta volteada")
        }
    },
    [volteada])

    const voltear = () =>{
        setVolteada(true)
    }
    return(
        <div className="ficha" onClick = {voltear}>
            <div className = "cara-ficha"></div>
                {animal}
            <div className= "dorso-ficha"></div>   
        </div>
    )
    
}

    export default Ficha;