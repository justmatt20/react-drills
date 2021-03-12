import React from 'react';
import './App.css';
import Image from './Image';

class App extends React.Component {
  render() {
    return(
      <div>
        <Image url={"http://curiouspuppies.com/wp-content/uploads/2013/03/puppy-tries-to-escape.jpg"}/>
      </div>
    )
    
  }
}

export default App;



//   render(){
//   return (
//     <div>
//       <Image url={"http://curiouspuppies.com/wp-content/uploads/2013/03/puppy-tries-to-escape.jpg" />
//     </div>
//   );
//   }
// }