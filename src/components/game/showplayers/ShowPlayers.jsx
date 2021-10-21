import React, {useState} from 'react';
import './shoplayers.scss'

import Card from '../cards/Card'

function ShowPlayers(props) {
    const [qt, qtAss,qtDet, types] = [props.qt, props.qtAssassino, props.qtDetetive, props.types]
    const [playersArray, setPlayersArray] = useState();
    const [level, setLevel] = useState(-1);
    const [hidden, setHidden] = useState(true);

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
            if(hidden){
                return(
                    <div className="showcontent">
                        <div className="header">Clique no botão para ver seu personagem</div>
                        <div className="cardhidden">{level + 1}/{qt}</div>
                        <button className="showbtn" onClick={e => setHidden(false)}>Mostrar</button>
                    </div>
                )
            }
            else{
                return (
                    <div className="showcontent">
                    <div className="header">Clique no botão e passe o celular para o próximo jogador</div>
                        <Card type={playersArray[level]} checked={false} expand={true}/>
                        <button className="nextbtn" onClick={e => nextCard()}>Próximo</button>
                    </div>
                )

            }
            
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
    function nextCard(){
        setLevel(level + 1)
        setHidden(true)
    }
    return ( 
        <div className="showplayers">
            
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