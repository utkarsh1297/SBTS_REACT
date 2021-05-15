import React, { Component } from 'react';
import './App.css';
import fire from './Config/fire';
import Login from './Config/Login';
import Home from './Config/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Detail from './Config/Detail';
// import Data from "./Config/Data";


class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
    
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
       else{
        this.setState({user})
      }
    })
  }
  
render() 
{
  return(
    
    <div className="App">
      <h1>Welcome on !!</h1>
      <h2>School Bus Tracking System</h2>
      {this.state.user ? (<Detail/>) : (<Login/>)}
       <Home/>
        {/* <Data/> */}
    </div>
  );
}
}
export default App;
