import React from 'react';
import './App.css';
import NewTask from './newTask';
import List from './List'
// import ToDo from './ToDo'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todo: [],
      inputText: '',
    
    }
  }
    
  handleChange = (e) => {
      this.setState({inputText: e.target.value});
    
  }

  buttonClick = () => {
      const newTodos = [...this.state.todo];
      newTodos.push(this.state.inputText);
      this.setState({todo: newTodos, inputText: ' '});
  }


  render() {
  return (
    <div className="App">
      {/* <ToDo/> */}
      <NewTask />
      <List />
      <h1>My to do list!</h1>
        <input value={this.state.inputText} onChange={this.handleChange}/>
        <button onClick={this.buttonClick}>Add</button>
        <ul>{this.state.todo.map(todo => <li>{todo}</li>)}</ul>
    </div>
  )
  }
};


export default App;

