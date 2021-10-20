import React, {useState,useEffect} from 'react';
import './card.scss'

import assassino from '../../../assets/assassino.png'
import detetive from '../../../assets/detetive.png'
import cidadao from '../../../assets/cidadao.png'
import anjo from '../../../assets/anjo.png'
import joker from '../../../assets/joker.png'
import traidor from '../../../assets/traidor.png'
import bruxa from '../../../assets/bruxa.png'
import menino from '../../../assets/menino.png'

function Card(props) {
    var image = ''
    switch(props.type){
        default: image = ''
            break

        case 'Assassino': image = assassino
            break
        case 'Detetive': image = detetive
            break
        case 'Cidadão': image = cidadao
            break
        case 'Anjo': image = anjo
            break
        case 'Joker': image = joker
            break
        case 'Traidor': image = traidor
            break
        case 'Bruxa': image = bruxa
            break
        case 'Menino': image = menino
            break
    }
    const [classes, setClasses] = useState('');
    
    
    useEffect(() => {
        if(classes === ''){
            if(props.checked === true) setClasses('card checked')
            else setClasses('card')
        }
        else{
            if(classes === 'card') setClasses('card checked')
            else setClasses('card')
        }
    }, [props.checked]);

    useEffect(() => {
        if(props.expand) setClasses('card expand')
    }, [props.expand]);
    
    return (
        <div className={classes}>
            <i className="fa fa-check-circle fa-2x"></i>
            <img src={image} alt="carregando..." />
            <div className="title">
                {props.type}
            </div>           
        </div>
     );
}
 
export default Card;
