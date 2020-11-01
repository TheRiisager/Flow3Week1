import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
        }
    }

    render() { 
        return ( 
            <div>
                <p>The current time is: {this.state.time}</p>
        <button onClick={ () => this.setState({ time: new Date().toLocaleString() }) }>Refresh</button>
            </div>
         );
    }
}
 
export default Timer;