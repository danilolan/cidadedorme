import React, {useState} from 'react';
import './typeplayers.scss'

import Card from '../cards/Card';

function TypePlayers(props) {
    const assassino= true;
    const detetive = true;
    const cidadao= true;
    const [anjo, setAnjo] = useState(false);
    const [joker, setJoker] = useState(false);
    const [traidor, setTraidor] = useState(false);
    const [bruxa, setBruxa] = useState(false);
    const [menino, setMenino] = useState(false);

    var types = []
                                        
    function change(type){
        switch(type){
            case 'anjo':
                anjo ? setAnjo(false) : setAnjo(true)
            break
            case 'joker':
                joker ? setJoker(false) : setJoker(true)
            break
            case 'traidor':
                traidor ? setTraidor(false) : setTraidor(true)
            break
            case 'bruxa':
                bruxa ? setBruxa(false) : setBruxa(true)
            break
            case 'menino':
                menino ? setMenino(false) : setMenino(true)
            break

            default: return
        }
    }

    function next(){
        if(anjo) types.push('anjo')
        if(joker) types.push('joker')
        if(traidor) types.push('traidor')
        if(bruxa) types.push('bruxa')
        if(menino) types.push('menino')

        props.getTypes(types)
        props.nextLevel()
    }

    return ( 
        <div className="typeplayers">
            <div className="header">
                {/* <button className='resetbutton' onClick={e => props.resetLevel()}><i className="fa fa-undo"></i></button> */}
                <div className="text">
                    Selecione os tipos de personagem:
                </div>
            </div>

            <div className="contentcards">
                <button className='typefix'>
                    <Card type='Assassino' checked={assassino}/>
                </button>

                <button className='typefix' >
                    <Card type='Detetive' checked={detetive}/>
                </button>

                <button className='typefix'>
                    <Card type={'Cidadão'} checked={cidadao}/>
                </button>

                <button onClick={e => change('anjo')}>
                    <Card type='Anjo' checked={anjo}/>
                </button>

                <button onClick={e => change('joker')}>
                    <Card type='Joker' checked={joker}/>
                </button>

                <button onClick={e => change('traidor')}>
                    <Card type='Traidor' checked={traidor}/>
                </button>

                <button onClick={e => change('bruxa')}>
                    <Card type='Bruxa' checked={bruxa}/>
                </button>

                <button onClick={e => change('menino')}>
                    <Card type='Menino' checked={menino}/>
                </button>
            </div>         
            <button className="nextbutton" onClick={e => next()}>
                Continuar <i className="fa fa-chevron-circle-right"></i>
            </button>
            
        </div>
     );
}

export default TypePlayers;