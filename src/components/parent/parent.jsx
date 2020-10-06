import React, { Component } from 'react';
import SenderChild from '../sender-child/sender-child';
import ReceiveChild from '../receive-child/receive-child';
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counters:[]
         }
    }
    getcounter=(value) =>{
        this.setState({
            counters:this.state.counters.concat(value)
            // counter method returns reference after adding element but push method never returns reference
        })
    }
    render() { 
        return ( <div>
            <h3>Message:{this.state.counter}</h3>
            <ReceiveChild sendarray={this.state.counters}/>
            <SenderChild sendcounter={this.getcounter}/>
        {/* <ul>{this.state.counters.map(counter =><li>{counter}</li>)}</ul> */}
        
        </div> );
    }
}
 
export default Parent;