import React from 'react';
import '../estilos/Header.css'

const Header = ({reiniciarPartida}) =>{

    return(
        <h2>
            <div className="title">MEMO-TEST</div>
            <div>
                <button className="reload-button" onClick = {reiniciarPartida}>
                    Reiniciar partida
                </button>
            </div>
        </h2>

    )
   
}
export default Header;