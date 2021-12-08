import React from "react";
import Ficha from "./Ficha";

const Tablero = ({fichas}) =>{
    
    return(
            <div className="tablero">
               
                    
                    {fichas.map((ficha) => <Ficha id = {ficha.index} animal = {ficha.animal} />)}
                    
            </div>
    )
}
export default Tablero;