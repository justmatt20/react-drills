import React from 'react';
import './App.css';


class App extends React.Component{
    constructor(){
      super()
      this.state= {
        filterInput: '',
        items: ['spaghetti', 'cheese', 'eggs', 'tomatoes', 'apples', 'oranges']

      }
    }

    inputChange = (filter) => {
      this.setState({filterInput: filter})
    }

    
  render(){
      let itemsList = this.state.items.filter((element, index) => {
        return element.includes(this.state.filterInput);
      })

      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;});

        return (
          <div className="App">
            <input onChange={e=> this.inputChange(e.target.value)} type="text"/>
            {itemsList}
          </div>
        );
  }
}

export default App;




// class App extends React.Component{
//     constructor(){
//       super()
//       this.state= {
//         input: [],
//         items: ['spaghetti', 'cheese', 'eggs', 'tomatoes', 'apples', 'oranges']

//       }
//     }

    // inputChange = (e) => {
    //   this.setState({input: e.target.value})
    // }

    
  // render(){
  // return (
  //   <div className="App">
  //     <input onChange={items.filter(items=> items.toLowerCase().startsWith(this.filterLetters.toLowerCase()))}/>
  //     {/* <h2 className="items" onChange>spaghetti</h2>
  //     <h2 className="items">cheese</h2>
  //     <h2 className="items">eggs</h2>
  //     <h2 className="items">tomatoes</h2>
  //     <h2 className="items">apples</h2>
  //     <h2 className="items">oranges</h2> */}
  //   </div>
  // );
  // }
  // }