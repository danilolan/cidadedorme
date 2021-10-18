import React from 'react';
import './shoplayers.scss'

function ShowPlayers(props) {
    console.log(props.qt, props.types)
    return ( 
        <div className="showplayers">
            <button className='resetbutton' onClick={e => props.resetLevel()}><i className="fa fa-undo"></i></button>
            <button onClick={e => props.resetLevel(e)}>Next</button>
        </div>
     );
}

export default ShowPlayers;