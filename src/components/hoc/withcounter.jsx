import React, { Component } from 'react';
const WithCounter = (OriginalComponent) => {
    class NewComponent extends Component{
        constructor()
    {
        super();
        this.state={
            count:0
        }
    }
    incrementCounter=()=>
    {
        this.setState({
            count:this.state.count+1 })
    }
    render(){
        return(
            <div>
                <OriginalComponent count={this.state.count} incrementcounter={this.incrementCounter} />
            </div>
        )
    }
    }
    return NewComponent
}
 
export default WithCounter;