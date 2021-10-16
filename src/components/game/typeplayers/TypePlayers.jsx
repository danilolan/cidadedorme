import React, {useState} from 'react';
import './typeplayers.scss'

import Card from '../cards/Card';

function TypePlayers(props) {
    const assassino= true;
    const detetive = true;
    const vitima= true;
    const [anjo, setAnjo] = useState(false);

    var types = []
                                        
    function change(type){
        switch(type){
            case 'anjo':
                anjo ? setAnjo(false) : setAnjo(true)
            break

            default: return
        }
    }

    function next(){
        if(anjo) types.push('anjo')
        props.getTypes(types)
        props.nextLevel()
    }

    return ( 
        <div className="typeplayers">
            <div className="header">
                <button className='resetbutton' onClick={e => props.resetLevel()}><i className="fa fa-undo"></i></button>
                <div className="text">
                    Selecione os tipos de personagem:
                </div>
            </div>

            <div className="contentcards">
                <button className='typefix' onClick={e => change('assassino')}>
                    <Card type='Assassino' checked={assassino}/>
                </button>

                <button className='typefix' onClick={e => change('detetive')}>
                    <Card type='Detetive' checked={detetive}/>
                </button>

                <button className='typefix' onClick={e => change('vitima')}>
                    <Card type='Vitima' checked={vitima}/>
                </button>

                <button onClick={e => change('anjo')}>
                    <Card type='Anjo' checked={anjo}/>
                </button>
            </div>         
            <button className="nextbutton" onClick={e => next()}>Next</button>
            
        </div>
     );
}

export default TypePlayers;