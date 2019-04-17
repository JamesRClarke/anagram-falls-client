import React, {Component} from 'react';
import Anagram from './Anagram/Anagram';
import Aux from '../../../hoc/Aux';

class GameBox extends Component {
  state = {
    anagramPositionXY: null,
    gameBoxHeight: null,
    gameBoxWidth: null
  }

  componentDidMount() {
    const height = this.gameBox.clientHeight - this.inputBox.clientHeight - 35;
    const width = this.gameBox.clientWidth;
    this.setState({
      gameBoxHeight: height,
      gameBoxWidth: width
    })
  }


render() {

  return (
    <Aux>
      <p style={{pointer: 'cursor'}} onClick={this.startIntervalHandler}>Start</p>

      <div ref={ (gameBox) => this.gameBox = gameBox} className="my-3 game-box">

        <Anagram
          anagram="Here I Am"
          playingHeight={this.state.gameBoxHeight}
          playingWidth={this.state.gameBoxWidth}
          />

        <div ref={ (inputBox) => this.inputBox = inputBox} className="game-answer d-flex justify-content-center align-items-center">
          <input type="text"  />
        </div>

      </div>
    </Aux>
  )
}
}

export default GameBox
