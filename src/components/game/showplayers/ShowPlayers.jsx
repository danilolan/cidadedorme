import React from 'react';
import './shoplayers.scss'

function ShowPlayers(props) {
    const [qt, qtAss, types] = [props.qt, props.qtAssassino, props.types]
    console.log(randomArray(qt, qtAss, types)) 

    return ( 
        <div className="showplayers">
            <button className='resetbutton' onClick={e => props.resetLevel()}><i className="fa fa-undo"></i></button>
            <button onClick={e => props.resetLevel(e)}>Next</button>
        </div>
     );
}

function randomArray(qt, qtAss, types){
    qt -= 1
    const qtTypes = types.length
    var playersArray = []
    var n 

    //Posicionando os types no array dos players 
    for (var t = 0; t < qtTypes; t++){
        while(true){
            n = getRandomIntInclusive(1, qt)
            if(playersArray[n] === undefined){
                playersArray[n] = types[t]
                break
            }
        }
    }
    //Posicionando os assassinos no array dos players
    for (var a = 0; a < qtAss; a++){
        while(true){
            n = getRandomIntInclusive(1, qt)
            if(playersArray[n] === undefined){
                playersArray[n] = 'assassino'
                break
            }
        }
    }

    //posicionando os cidadaos no array dos players
    for (var i = 0; i < qt; i++) {
        if(playersArray[i] === undefined) playersArray[i] = 'cidadao'
    }
    return playersArray
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default ShowPlayers;