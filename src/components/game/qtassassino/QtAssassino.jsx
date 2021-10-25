import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import Card from '../cards/Card';
import './qtassassino.scss'

function QtAssassino(props) {
    const [qtAssassino, setQtAssassino] = useState(1);

    useEffect(function(){
        
        if(qtAssassino === 0){
            setQtAssassino(1)
        }
        if(qtAssassino > 48){
            setQtAssassino(48)
        }
    }, [qtAssassino]);

    function next(){
        props.getQt(qtAssassino)
        props.nextLevel()
    }

    return ( 
        <div className="qtassassino">
            <div className="header">
                
                <div className="text">
                    Selecione a quantidade de <span className="evil">assassinos</span>:
                </div>
            </div>
            <Card type="Assassino" checked={false}/>
            <div className="inputqt">
                <button className='minus' onClick={e => setQtAssassino(qtAssassino - 1)}>
                    <i className="fa fa-minus"></i>
                </button>
                <div className="qtlabel">{qtAssassino}</div>
                <button className='plus' onClick={e => setQtAssassino(qtAssassino + 1)}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <button className='nextbutton' onClick={e => next()}>
                Continuar <i className="fa fa-chevron-circle-right"></i>
            </button>
        </div>
     );
}

export default QtAssassino;