import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import './qtplayers.scss'

function QtPlayers(props) {
    const [qt, setQt] = useState(3);
    /* const [oldQt, setOldQt] = useState(qt) */

    useEffect(function(){
        
        if(qt === 1 || qt === 2){
            setQt(3)
        }
        if(qt > 50){
            setQt(50)
        }
    }, [qt]);

    return ( 
        <div className="qtplayers">
            <div className="text">
                Selecione a quantidade de jogadores:
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
            <button className='nextbutton' onClick={e => props.nextLevel(qt)}>
                Continuar <i className="fa fa-chevron-circle-right"></i>
            </button>
        </div>
     );
}

export default QtPlayers;