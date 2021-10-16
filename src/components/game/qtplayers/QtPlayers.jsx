import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import './qtplayers.scss'

function QtPlayers(props) {
    const [qt, setQt] = useState(3);

    useEffect(function(){
        
        if(qt === 1 || qt === 2){
            setQt(3)
        }
        if(qt > 50){
            setQt(50)
        }
    }, [qt]);

    function reset(){
        props.resetLevel()
        setQt(3)
    }

    function next(){
        props.getQt(qt)
        props.nextLevel()
    }

    return ( 
        <div className="qtplayers">
            <div className="header">
                <button className='resetbutton' onClick={e => reset()}><i className="fa fa-undo"></i></button>
                <div className="text">
                    Selecione a quantidade de jogadores:
                </div>
            </div>
            <div className="inputqt">
                <button className='minus' onClick={e => setQt(qt - 1)}>
                    <i className="fa fa-minus"></i>
                </button>
                <input type='number' value={qt} onChange={e => setQt(parseInt(e.target.value))}/>
                <button className='plus' onClick={e => setQt(qt + 1)}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <button className='nextbutton' onClick={e => next()}>
                Continuar <i className="fa fa-chevron-circle-right"></i>
            </button>
        </div>
     );
}

export default QtPlayers;