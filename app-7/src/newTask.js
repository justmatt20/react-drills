import React from 'react';
import './App.css'

class NewTask extends React.Component{
    constructor(){
        super();
        this.state = {
            task: '',
        }
    }

    eventChange = (e) => {
        this.setState({task: e.target.value})
    }

    buttonClick = () => {
        this.add(this.state.input);
        this.setState({task: ""})
    }
render() {
    return(
        <div>
            <input placeholder="New Task" value={this.state.task} onChange={this.eventChange}/>
            <button onClick={this.buttonClick}>Add New Task</button>

        </div>
    )
}
}

export default NewTask