import React , { Component } from "react";
import fire from "./fire";

class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state={
           
        }
    }
    logout(){
        fire.auth().signOut();
    }
    render()
    {
        return(
            <div>
               <h1>You are logged in!!</h1>
                <button onClick={this.logout} className="btn btn-warning">Logout</button>
            </div>
        )
    }
}
export default Home;