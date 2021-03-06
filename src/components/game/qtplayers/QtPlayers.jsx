import React, { useState,useEffect } from 'react';
import './qtplayers.scss'

function QtPlayers(props) {
    const [qt, setQt] = useState(3);
    var minQt = props.qtAssassino + props.qtDetetive + props.types.length + 1
    const maxQt = 50

    useEffect(function(){       
        if(qt < minQt){
            setQt(minQt)
        }
        if(qt > maxQt){
            setQt(maxQt)
        }
    }, [qt]);

    function next(){
        props.getQt(qt)
        props.nextLevel()
    }

    return ( 
        <div className="qtplayers">
            <div className="header">
                
                <div className="text">
                    Selecione a quantidade de jogadores:
                </div>
            </div>
            <div className="inputqt">
                <button className='minus' onClick={e => setQt(qt - 1)}>
                    <i className="fa fa-minus"></i>
                </button>
                <div className="qtlabel">{qt}</div>
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