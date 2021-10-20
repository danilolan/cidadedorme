import React, {useState} from 'react';
import './game.scss'

import QtPlayers from './qtplayers/QtPlayers';
import TypePLayers from './typeplayers/TypePlayers'
import ShowPlayers from './showplayers/ShowPlayers'
import QtAssassino from './qtassassino/QtAssassino';
import QtDetetive from './qtdetetive/QtDetetive'

function Game(props) {
    const [level,setLevel] = useState(1)
    
    const [qt ,setQt] = useState(3)
    const [types, setTypes] = useState([])
    const [qtAssassino, setQtAssassino] = useState(1);
    const [qtDetetive, setQtDetetive] = useState(1);
    
    function render(){
        switch(level){
            case 1: return <TypePLayers nextLevel={nextLevel} resetLevel={resetLevel} getTypes={getTypes}/>
            case 2: return <QtAssassino nextLevel={nextLevel} resetLevel={resetLevel} getQt={getQtAssassino}/>
            case 3: return <QtDetetive nextLevel={nextLevel} resetLevel={resetLevel} getQt={getQtDetetive}/>
            case 4: return <QtPlayers nextLevel={nextLevel} resetLevel={resetLevel} getQt={getQt} qt={qt} types={types} qtAssassino={qtAssassino} qtDetetive={qtDetetive}/>
            case 5: return <ShowPlayers resetLevel={resetLevel} qt={qt} types={types} qtAssassino={qtAssassino} qtDetetive={qtDetetive}/>

            default: return <QtPlayers/>
        }
    }

    function getQt(qt){
        setQt(qt)
    }

    function getTypes(types){
        setTypes(types)
    }

    function getQtAssassino(qt){
        setQtAssassino(qt)
    }
    function getQtDetetive(qt){
        setQtDetetive(qt)
    }

    function nextLevel(){
        switch(level){
            case 1: setLevel(2) 
                break
            case 2: setLevel(3)
                break
            case 3: setLevel(4)
                break
            case 4: setLevel(5)
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