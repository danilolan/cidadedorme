import React, {useState,useEffect} from 'react';
import './card.scss'

import assassino from '../../../assets/assassino.png'
import detetive from '../../../assets/detetive.png'
import vitima from '../../../assets/vitima.png'
import anjo from '../../../assets/anjo.png'

function Card(props) {
    var image = ''
    switch(props.type){
        default: image = ''
            break

        case 'Assassino': image = assassino
            break
        case 'Detetive': image = detetive
            break
        case 'Vitima': image = vitima
            break
        case 'Anjo': image = anjo
            break
    }
    

    const [classes, setClasses] = useState('card');

    useEffect(() => {
        if(classes === 'card') setClasses('card checked')
        else setClasses('card')
    }, [props.checked]);

    return (
        <div key={props.checked} className={classes}>
            <i className="fa fa-check-circle fa-2x"></i>
            <img src={image} alt="carregando..." />
            <div className="title">
                {props.type}
            </div>
        </div>
     );
}
 
export default Card;
