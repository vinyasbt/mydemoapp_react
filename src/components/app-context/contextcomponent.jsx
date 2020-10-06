import React, { Component } from 'react';
import WithContext from '../hoc/withContext';
class ContextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value:''
         }
    }
    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    handlesubmit=()=>{
        this.props.context.setvalue('prop1',this.state.value)
    }
    render() { 
        return ( <div>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button onClick={this.handlesubmit}>Update</button>
            
            {this.props.context.getvalue.prop1}</div> );
    }
}
 
export default WithContext(ContextComponent);