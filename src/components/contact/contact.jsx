import React from 'react';
import './contact.css'
class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contacted:props.contacted==='true' || props.contacted===true ? true :false
        }
    }
    changecontacted=()=>{
        this.setState({
            contacted:!this.state.contacted
        })
    }
    render()
    {
        return ( <div className={this.props.gender=="m"?'contactm':this.props.gender=="f"?'contactf':'show'}>
        <div className={this.state.contacted==true?'linethrough':''}>
        <h5>{this.props.name}</h5>
        <h5 className={this.props.email?'show':'hide'}>Email:{this.props.email}</h5>
        <h5 className={this.props.mobile?'show':'hide'}>Mobile:{this.props.mobile}</h5>
        <hr /></div>
        <input type='checkbox' checked={this.state.contacted} onChange={this.changecontacted} />Contacted
     </div>);
    }
  
}
 
export default Contact;