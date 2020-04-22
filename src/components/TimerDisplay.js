import React, { useState } from 'react';

const TimerDisplay = (props) =>{   
    return(
        <div>
            Time spent: {props.timeElapsed}
        </div>
    )
}

export default TimerDisplay;