import React from 'react';
import '../estilos/Header.css'

const Header = ({reiniciarPartida}) =>{

    return(
        <header>
            <div className="title">MEMO-TEST</div>
            <div>
                <button className="reload-button" onClick = {reiniciarPartida}>
                    Reiniciar partida
                </button>
            </div>
        </header>

    )
   
}
export default Header;