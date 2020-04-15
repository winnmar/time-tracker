import React from 'react';

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {hours: 1, minutes: 0, seconds: 0};

        this.resetClock = this.resetClock.bind(this);
    }

    resetClock(){
        this.setState(state => ({
            hours: 0,
            minutes: 0,
            seconds: 0,
        }))
    }
    

    render(){
        return(
            <div>
                <div>
                    Time spent: {this.state.hours} : {this.state.minutes > 10 ? this.state.minutes : `0${this.state.minutes}`} : {this.state.seconds > 10 ? this.state.seconds : `0${this.state.seconds}`}
                </div>
                <button onClick={this.resetClock}>
                    Reset
                </button>  
            </div> 
        )
    }

};

export default Timer;