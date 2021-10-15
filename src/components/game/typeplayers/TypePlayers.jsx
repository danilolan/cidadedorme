import React from 'react';


function TypePlayers(props) {
    return ( 
        <div className="typeplayers">
            TYPEPLAYERS
            <button onClick={e => props.nextLevel(e)}>Next</button>
        </div>
     );
}

export default TypePlayers;