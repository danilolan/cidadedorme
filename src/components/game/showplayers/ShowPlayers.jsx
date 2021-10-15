import React from 'react';


function ShowPlayers(props) {
    return ( 
        <div className="showplayers">
            SHOWPLAYERS
            <button onClick={e => props.resetLevel(e)}>Next</button>
        </div>
     );
}

export default ShowPlayers;