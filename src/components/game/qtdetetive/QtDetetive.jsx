import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';
import Card from '../cards/Card';
import './qtdetetive.scss'

function QtDetetive(props) {
    const [qt, setQt] = useState(1);

    useEffect(function(){
        
        if(qt === 0){
            setQt(1)
        }
        if(qt > 48){
            setQt(48)
        }
    }, [qt]);

    function reset(){
        props.resetLevel()
        setQt(1)
    }

    function next(){
        props.getQt(qt)
        props.nextLevel()
    }

    return ( 
        <div className="qtdetetive">
            <div className="header">
                <button className='resetbutton' onClick={e => reset()}><i className="fa fa-undo"></i></button>
                <div className="text">
                    Selecione a quantidade de &nbsp;<div className="good">detetives</div>:
                </div>
            </div>
            <Card type="Detetive" checked={false}/>
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

export default QtDetetive;