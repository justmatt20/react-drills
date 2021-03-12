import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }


  updateInput =(e) => {
    this.setState({input: e.target.value})
  }



  render() {
    console.log(this.state);
  return (
    <div className="App">
      <input onChange={this.updateInput} />
      <h3 className="content">{this.state.input}</h3>
    </div>
  );

}
}
export default App;
