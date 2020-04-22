import React from 'react';
import TimerDisplay from "./TimerDisplay"
import TimeControlButtons from "./TimerControlButtons"

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {beginTime: new Date(), endTime: new Date(), timeElapsed: 0, isStarted: false};
    }

    componentWillUnmount(){
        this.resetClock();
    }

    startClock = () =>{
        this.setState(state => ({
            beginTime: new Date(),
        }))
        this.intervalId = setInterval(this.incrementClock, 1000);
        this.isStarted = true;
    }

    stopClock = () => {
        clearInterval(this.intervalId);
        this.setState(state => ({
            isStarted: true,
        }))
    }

    resetClock = () => {
        this.setState(state => ({
            beginTime: new Date(), 
            endTime: new Date(),
            timeElapsed: 0,
        }))
        clearInterval(this.intervalId);
    }

    incrementClock = () => {
        this.setState(state => ({
            timeElapsed: state.timeElapsed + 1000,
        }))  
    }

    render(){
        return(
            <div>
                <TimerDisplay timeElapsed={this.state.timeElapsed}/>
                <TimeControlButtons onStartClick={this.startClock} onResetClick={this.resetClock}/>
            </div> 
        )
    }

};

export default Timer;