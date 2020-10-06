import React, { Component } from 'react';
import axios from 'axios';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data: {
                id: '',
                name: '',
                username: '',
                email: ''
            },
            errors:{
                id: '',
                name: '',
                username: '',
                email: '' 
            }
        }
    }
    handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        let msg='';
        switch(name)
        {
            case'id':
                break;
                case'name':
                msg=value===''?'name is manadtory':(value.length <3?'name atleast have 3 charecters':'')
                break;
                case 'username':
                    msg=value===''?'username is manadtory':''
                    break;
                default:
                    break;
        }
        this.setState({
            errors:{
                ...this.state.errors,
                [name]:msg
            }
        })
        this.setState({
            data:{
                ...this.state.data,
                [name]:value
            }
        })

    }
    validateForm=(errors)=>{
        let valid=true;
        Object.values(errors).forEach(key=>{
            key.length>0 &&(valid=false)
        })
        return valid;
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        if(this.state.data.name==='' || this.state.data.username==='' || this.state.data.email===''){
            alert('enter valid form')
        }
       else if(this.validateForm(this.state.errors)){
             axios.post('https://jsonplaceholder.typicode.com/users/',this.state.data).then(response=>{
            console.log(response.data)
})
alert(JSON.stringify(this.state.data))

    }
    else{
        alert('invalid form')
    }
}
    render() { 
        console.log(this.state.data)
        return (  
            <div style={{ width: '400px', padding: '10px', margin: '10px' }}>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Id</label>
                        <input type='text'
                               className='form-control'
                               name='id'
                               onChange={this.handleChange}
                               value={this.state.data.id} />
                    </div>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type='text'
                               className='form-control'
                               name='name'
                               onChange={this.handleChange}
                               value={this.state.data.name} />
                               {
                                   this.state.errors.name!=='' && <div className='alert alert-danger'>{this.state.errors.name}</div>
                               }
                    </div>
                    <div className='form-group'>
                        <label>User Name</label>
                        <input type='text'
                               className='form-control'
                               name='username'
                               onChange={this.handleChange}
                               value={this.state.data.username} />
                               {
                                   this.state.errors.username!=='' && <div className='alert alert-danger'>{this.state.errors.username}</div>
                               }
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='email'
                               className='form-control'
                               name='email'
                               onChange={this.handleChange}
                               value={this.state.data.email} />
                    </div>
                    <div>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Form;