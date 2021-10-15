import React from 'react';


function QtPlayers(props) {
    return ( 
        <div className="qtplayers">
            QTPLAYERS
            <button onClick={e => props.nextLevel(e)}>Next</button>
        </div>
     );
}

export default QtPlayers;