
import Letters from './components/Letters';
import Score from './components/Score';
import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import EndGame from './components/EndGame';
export class App extends Component {
  constructor(){
    super()
    this.state={
      letterStatus : this.generateLetterStatuses(),
      solution : {word : 'AMONGUS' , hint : 'very sus'},
      score : 100
    }
    
  }
  correctLetter =(letter)=>{
    console.log(this.state.solution.word.includes(letter))
    return this.state.solution.word.includes(letter)
  }
  selectLetter = letter => {
    const updatedScore = this.correctLetter(letter)
      ? this.state.score + 5
      : this.state.score - 20
    let letters = this.state.letterStatus
    letters[letter] = true
    this.setState({
      letterStatus: letters,
      score: updatedScore,
    })
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
      <div id='game'>
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution = {this.state.solution}
        />
        <Letters
        selectLetter={this.selectLetter}
          letterStatus={this.state.letterStatus} />
         <EndGame score={this.state.score} word={this.state.solution.word} letterStatus={this.state.letterStatus} />
      </div>
    )
  }
}

export default App;
