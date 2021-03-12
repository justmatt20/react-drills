import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state= {
      filterInput: '',
      items: ['spaghetti', 'cheese', 'eggs', 'tomatoes', 'apples', 'oranges']

    };
  }

  render(){
    let itemsList = this.state.items.map((element, index) =>{
      return <h2 key={index}>{element}</h2>;
    });
  
  return (
    <div className="App">
      {itemsList}
    </div>
  )
  }
  }



export default App;
