import React from 'react';
import App from './App';
import './App.css';

class Image extends React.Component {
constructor(){
    super();
    this.state = {

    }
}
render(){
    return(
        <div className="image">
            <img src={this.props.url}/>
            <div>Error 404</div>
        </div>
    )
}

}
export default Image





