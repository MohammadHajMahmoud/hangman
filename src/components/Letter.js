import React, { Component } from 'react';
import Letters from './Letters';
export class Letter extends Component{
    render(){
        return (<span> {this.props.letter}</span>)
    }
}
export default Letter