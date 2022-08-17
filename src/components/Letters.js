import React, { Component } from 'react';
import Letter from './Letter';

export class Letters extends Component{
    render(){
        return <div> 
           {Object.keys(this.props.letterStatus).map(letter => (
            <Letter
              letter={letter}/>))}
        </div>
         
}
}
export default Letters