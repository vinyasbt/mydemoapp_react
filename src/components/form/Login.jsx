import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:{
                username:'',
                password:''
            }
         }
    }
    handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            data:{
                ...this.state.data,
                [name]:value
            }
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        if(this.state.data.username==='react' && this.state.data.password==='password')
        {
            sessionStorage.username='react'
            sessionStorage.password='password'
            alert('login successful')
        }
        else{
            alert('invalid credentials')
        }
    }
    // isloggedin=()=>{
    //     sessionStorage.username='react'
    //     sessionStorage.password='password'
    // }
    isloggedout=()=>{
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('password')
    }
    render() { 
        return ( <div style={{ width: '400px', padding: '10px', margin: '10px' }}>
            <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
                        <label>User Name</label>
                        <input type='text'
                               className='form-control'
                               name='username'
                               onChange={this.handleChange}
                               value={this.state.data.username} />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password'
                               className='form-control'
                               name='password'
                               onChange={this.handleChange}
                               value={this.state.data.email} />
                    </div>
                    <div>
                        <button className='btn btn-primary'>Submit</button>
                        
                       
                    </div>
            </form>
            {/* <button className='btn btn-primary' onClick={this.isloggedin}>Login</button><br /> */}
             <button className='btn btn-primary' onClick={this.isloggedout}>Logout</button>
        </div> );
    }
}
 
export default Login;