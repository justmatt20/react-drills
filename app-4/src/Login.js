import React, { Component } from 'react';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
infoChange= (e) => {
    this.setState({username: e.target.value})
}

infoAdd = (e) => {
    this.setState({password: e.target.value})
}

alertInfo = () => {
    alert(`username: ${this.state.username} password: ${this.state.password}`)
    
}

render(){
    console.log(this.state)
return(
        <div className="Login">
            <input placeholder="username" onChange={this.infoChange}/>
            <input placeholder="password" onChange={this.infoAdd}/>
            <button type="submit" onClick={this.alertInfo}>Login</button>
        </div>
    )
}
}


export default App;