import React, { useState } from 'react';

const TimerControlButtons = ({props, onStartClick, onResetClick}) =>{

    const handleStartClick = React.useCallback((event) => onStartClick(event.target.name), [onStartClick]);

    function handleResetClick(event){
        onResetClick(event.target.name);
    }

    return(
        <div>
            <button onClick={handleStartClick}>
                Start
            </button> 
            <button onClick={handleResetClick}>
                Reset
            </button>
        </div>
    )
}

export default TimerControlButtons;
