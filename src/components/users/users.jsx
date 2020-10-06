import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users :[]
         }
    }
    loaduser=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            this.setState({users:response.data})
        })
    }
    componentDidMount()
    {
        this.loaduser();
    }
    render() { 
        console.log(this.state.users)
        return ( <div>
            {/* <button onClick={this.loaduser}>LoadUser</button> */}
           <ol> {this.state.users.map(user =>
                // <li>{user.name}</li>
              <li> <Link to={`/users/`+user.id}>{user.name}</Link></li>
            //   <li> <Link to={`/users/${user.id}`}>{user.name}</Link></li>
            )}</ol>
        </div> );
    }
}
 
export default Users;