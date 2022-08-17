
import Letters from './components/Letters';
import Score from './components/Score';
import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
export class App extends Component {
  constructor(){
    super()
    this.state={
      letterStatus : this.generateLetterStatuses(),
      solution : {word : 'AMONGUS' , hint : 'very sus'},
      score : 100
    }
    
  }
  generateLetterStatuses() {
    const letters = {}
    for (let i = 65; i <= 90; i++) {
      letters[String.fromCharCode(i)] = false
    }
    return letters
  }
  render(){
    return (
      <div>
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution = {this.state.solution}
        />
        <Letters
          letterStatus={this.state.letterStatus}
          
        />
      </div>
    )
  }
}

export default App;
