import React from 'react';


function ShowPlayers(props) {
    console.log(props.qt, props.types)
    return ( 
        <div className="showplayers">
            SHOWPLAYERS
            <button onClick={e => props.resetLevel(e)}>Next</button>
        </div>
     );
}

export default ShowPlayers;