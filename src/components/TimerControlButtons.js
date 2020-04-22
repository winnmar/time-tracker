import React, { useState } from 'react';

const TimerControlButtons = ({props, onStartClick, onResetClick}) =>{

    function handleStartClick(event){
        onStartClick(event.target.name);
    }

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