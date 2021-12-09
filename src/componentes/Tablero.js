import React from "react";
import Ficha from "./Ficha";
import "../estilos/Tablero.css"

const Tablero = ({fichas , clickearFicha , parejasCorrectas , fichasVolteadas}) =>{
    
    return(
            <div className="tablero">
               
                    
                    {fichas.map((ficha) => <Ficha 
                    id = {ficha.index} 
                    animal = {ficha.animal} 
                    clickearFicha = {clickearFicha} 
                    parejasCorrectas = {parejasCorrectas}
                    fichasVolteadas = {fichasVolteadas}
                    />)}
                    
            </div>
    )
}
export default Tablero;