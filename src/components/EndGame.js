import React, { Component } from 'react'
export class EndGame extends Component {
  gameEnded = () => {
      if (this.props.score <= 0) {
          return true
      }
      for (let letter of this.props.word) {
          if (!this.props.letterStatus[letter]) {
              return false
          }
      }
      return true
  }
  render() {
      return (
          <div> {this.gameEnded()?
          (this.props.score <= 0 ? <span>HA HA YOU LOST ! The word was {this.props.word}</span> :
         <span>MEH You Won...IT WAS EASY ANYWAY</span>) : null}
      </div>
    )
  }
}

export default EndGame