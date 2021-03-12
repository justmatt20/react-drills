import React from 'react';
import './App.css'

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            displayTask: '',
        }
    }
render() {
    return(
        <div>
            <ul>
                <li></li>
            </ul>
            
        </div>
    )
}
}

export default List