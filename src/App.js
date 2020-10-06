import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact';
import ClickCounter from './components/counter/clickCounter';
import Contacts from './components/contacts/contacts';
import Table from './components/table/table';
import Users from './components/users/users';
import ParticularUser from './components/particularuser/particularuser';
import Parent from './components/parent/parent';
import Form from './components/form/form';
import {BrowserRouter, Switch,Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Login from './components/form/Login';
import ParentCounter from './components/counter/ParentCounter';
import {Provider} from'./components/app-context/app-context';
import contextcomponent from './components/app-context/contextcomponent';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      prop1:'this is initial value'
    }
  }
  updateValue=(key,value)=>{
    this.setState({
      [key]:value
    })
  }
  render(){
  return (
    <div >
      <BrowserRouter>
      <Provider value={{getvalue:this.state, setvalue:this.updateValue}}>
    <Header />
    {/* <Login /> */}
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/form'>Form</Link></li>
      <li><Link to='/users'>Users</Link></li>
      <li><Link to='/contacts'>Contacts</Link></li>
      <li><Link to='/counter'>Counter</Link></li>
      <li><Link to='/context'>contextcomponent</Link></li>
    </ul>
    <Route exact path='/' component={Login}></Route>
    <Route  path='/form' component={Form}></Route>
    <Route  path='/contacts' component={Contacts}></Route>
    <Route  path='/context' component={contextcomponent}></Route>
    <Route  exact path='/users' render={()=>((sessionStorage.username&&sessionStorage.password)?<Users />:(<Redirect to='/' />))}></Route>
    {/* <Route  exact path='/users/:id' render={()=>((sessionStorage.username&&sessionStorage.password)?<ParticularUser />:(<Redirect to='/' />))}></Route> */}
    <Route  exact path='/users/:id' component={ParticularUser}></Route>
    <Route   path='/counter' component={ParentCounter}></Route>
    
    
     {/* <ClickCounter /> */}
    {/*<Contact name='qwert' email='wert@wer.com' mobile='8512120' gender='m' contacted='true'/>
    <Contact name='zxcvb' email='dfghj@wer.com' mobile='851277777120' gender='m' contacted='false'/>
    <Contact name='yuiop' email='vbnm@wer.com' mobile='8512120963852' gender='f' contacted='false'/>
    <Contacts />
    <Table /> */}
    {/* <Users /> */}
    {/* <Contact name='wertyu' /> */}
    {/* <ParticularUser /> */}
    {/* <Parent /> */}
    {/* <Form /> */}
    <Footer /> 
    </Provider>
    </BrowserRouter>
    </div>
  );
}
}

export default App;
