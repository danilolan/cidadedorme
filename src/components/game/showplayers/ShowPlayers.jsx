import React, {useState} from 'react';
import './shoplayers.scss'

import Card from '../cards/Card'

function ShowPlayers(props) {
    const [qt, qtAss,qtDet, types] = [props.qt, props.qtAssassino, props.qtDetetive, props.types]
    const [playersArray, setPlayersArray] = useState();
    const [level, setLevel] = useState(-1);

    function render(){
        if(level === -1){
            return (
                <div className="showcontent">
                    <button className="start" onClick={e=>start()}>
                        Começar <i className="fa fa-play-circle"></i>
                    </button>
                </div>
            )
        }
        if(level === qt){
            return (
                <div className="showcontent">
                    <button className="restart" onClick={e=>restart()}>
                        Outro jogo <i className="fa fa-play-circle"></i>
                    </button>
                </div>
            )
        }
        else{
            return (
                <div className="showcontent">
                    <Card type={playersArray[level]} checked={false}/>
                    <button className="nextbutton" onClick={e => setLevel(level + 1)}>Next</button>
                </div>
            )
            
        }

    }
    
    function start(){
        setPlayersArray(randomArray(qt, qtAss, qtDet, types))
        setLevel(level + 1)
    }
    function restart(){
        setLevel(0)
        setPlayersArray(randomArray(qt, qtAss, qtDet, types))
    }

    return ( 
        <div className="showplayers">
            <button className='resetbutton' onClick={e => props.resetLevel()}><i className="fa fa-undo"></i></button>
            {render()}
        </div>
     );
}

function randomArray(qt, qtAss, qtDet, types){
    const qtTypes = types.length
    var playersArray = []
    var n 

    //Posicionando os types no array dos players 
    for (var t = 0; t < qtTypes; t++){
        while(true){
            n = getRandomIntInclusive(0, qt - 1)
            if(playersArray[n] === undefined){
                playersArray[n] = types[t]
                break
            }
        }
    }
    //Posicionando os assassinos no array dos players
    for (var a = 0; a < qtAss; a++){
        while(true){
            n = getRandomIntInclusive(0, qt - 1)
            if(playersArray[n] === undefined){
                playersArray[n] = 'assassino'
                break
            }
        }
    }

    //posicionando os detetives no array dos players
    for (var d = 0; d < qtDet; d++){
        while(true){
            n = getRandomIntInclusive(0, qt - 1)
            if(playersArray[n] === undefined){
                playersArray[n] = 'detetive'
                break
            }
        }
    }

    //posicionando os cidadaos no array dos players
    for (var i = 0; i < qt; i++) {
        if(playersArray[i] === undefined) playersArray[i] = 'cidadão'
    }
    return playersArray.map(str=>{
        str = str[0].toUpperCase() + str.substr(1);
        return str
    })
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default ShowPlayers;