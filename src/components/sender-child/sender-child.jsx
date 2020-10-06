import React from 'react';
class SenderChild extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    }
    incrementCounter=()=>
    {
        this.setState({
            counter:this.state.counter +1})
           { this.props.sendcounter(this.state.counter)}    
    }
    render()
    {
        return (<div>
            {/* <button onClick={()=>this.props.sendcounter(this.state.counter)}>Send</button> */}
            <button onClick={this.incrementCounter}>Send</button>
        </div>  );
    }
}
 
export default SenderChild;