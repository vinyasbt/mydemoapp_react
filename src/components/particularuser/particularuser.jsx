import React, { Component } from 'react';
import axios from 'axios';
class ParticularUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            particularuser:[]
         }
    }
    componentDidMount()
    {
        console.log('qwerty',this.props.match)
        console.log('test',this.props.match.params.id)
        axios.get('https://jsonplaceholder.typicode.com/users/'+this.props.match.params.id).then(response=>{
            this.setState({particularuser:response.data})
        })
    }
    
    render() { 
        return ( <div>
            {this.state.particularuser.id}<br />
            {this.state.particularuser.name}<br />
            {this.state.particularuser.email}<br />
            {this.state.particularuser.username}
        </div> );
    }
}
 
export default ParticularUser;