import React from 'react';

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {beginTime: new Date(), endTime: new Date(), timeElapsed: 0};

        this.resetClock = this.resetClock.bind(this);
        this.incrementClock = this.incrementClock.bind(this);
        this.startClock = this.startClock.bind(this);
        this.stopClock = this.stopClock.bind(this);

        this.isStarted = false;
    }

    componentWillUnmount(){
        this.resetClock();
    }

    startClock(){
        this.setState(state => ({
            beginTime: new Date(),
        }))
        this.intervalId = setInterval(this.incrementClock, 1000);
        this.isStarted = true;
    }

    stopClock(){
        clearInterval(this.intervalId);
        this.isStarted = false;
    }

    resetClock(){
        this.setState(state => ({
            beginTime: new Date(), 
            endTime: new Date(),
            timeElapsed: 0,
        }))
        clearInterval(this.intervalId);
    }

    incrementClock(){
        this.setState(state => ({
            timeElapsed: state.timeElapsed + 1000,
        }))  
    }

    render(){
        return(
            <div>
                <div>
                    Time spent: {this.state.timeElapsed}
                </div>
                    <button disabled={this.isStarted} onClick={this.startClock}>
                        Start
                    </button> 
                    <button disabled={!this.isStarted} onClick={this.stopClock}>
                        Stop
                    </button>
                    <button onClick={this.resetClock}>
                        Reset
                    </button>
            </div> 
        )
    }

};

export default Timer;