import React, {useState} from 'react';
import './game.css'

import QtPlayers from './qtplayers/QtPlayers';
import TypePLayers from './typeplayers/TypePlayers'
import ShowPlayers from './showplayers/ShowPlayers'

function Game(props) {
    const [level,setLevel] = useState(1)
    
    function render(){
        switch(level){
            case 1: return <QtPlayers nextLevel={nextLevel}/>
            case 2: return <TypePLayers nextLevel={nextLevel}/>
            case 3: return <ShowPlayers resetLevel={resetLevel}/>

            default: return <QtPlayers/>
        }
    }

    function nextLevel(){
        switch(level){
            case 1: setLevel(2) 
                break
            case 2: setLevel(3)
                break

            default: setLevel(1)
                break
        }
    }

    function resetLevel(){
        setLevel(1)
    }

    return ( 
        <div className="game">
            {render()}
        </div>
     );
}

export default Game;