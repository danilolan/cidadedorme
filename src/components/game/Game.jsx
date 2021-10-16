import React, {useState} from 'react';
import './game.scss'

import QtPlayers from './qtplayers/QtPlayers';
import TypePLayers from './typeplayers/TypePlayers'
import ShowPlayers from './showplayers/ShowPlayers'

function Game(props) {
    const [level,setLevel] = useState(1)
    
    const [qt ,setQt] = useState(3)
    const [types, setTypes] = useState([])
    
    function render(){
        switch(level){
            case 1: return <QtPlayers nextLevel={nextLevel} resetLevel={resetLevel} getQt={getQt}/>
            case 2: return <TypePLayers nextLevel={nextLevel} resetLevel={resetLevel} getTypes={getTypes}/>
            case 3: return <ShowPlayers resetLevel={resetLevel} qt={qt} types={types}/>

            default: return <QtPlayers/>
        }
    }

    function getQt(qt){
        setQt(qt)
    }

    function getTypes(types){
        setTypes(types)
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