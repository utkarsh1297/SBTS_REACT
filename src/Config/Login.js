import React , { Component } from "react";
import fire from "./fire";

class Login extends Component{
    constructor(props)
    {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email : "",
            password : ""
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render()
    {
        return(
            <div>
                <form>
                    <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="enter email id"
                    onChange={this.handleChange}
                    value={this.state.email}
            
                    />
                    </form>

                    <form>
                    <input
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    id="password"
                    placeholder="enter password"
                    value={this.state.password}
                    />
                </form>

                <form>
                <button onClick={this.login}  > Login</button>
                     <button onClick={this.signup} > Signup </button>
                </form>
            </div>
        )
    }
}
export default Login;