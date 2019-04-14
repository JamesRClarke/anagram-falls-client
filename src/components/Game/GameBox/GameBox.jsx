import React, {Component} from 'react';
import Anagram from './Anagram/Anagram';
import Aux from '../../../hoc/Aux';

class GameBox extends Component {
  state = {
    anagramPositionTop: -35,
    anagramPositionXY: null,
    gameBoxHeight: null,
    gameBoxWidth: null
  }

  componentDidMount() {

    const height = this.gameBox.clientHeight - this.inputBox.clientHeight - 35;
    const width = this.gameBox.clientWidth;

    const randomStartPos = Math.ceil((Math.random() * (width - 80)));
    this.setState({
      anagramPositionXY: randomStartPos,
      gameBoxHeight: height,
      gameBoxWidth: width
    })

  }

  startIntervalHandler = () => {
    let intervalId = null;
    let moveAnagram = () => {
      if(this.state.anagramPositionTop <= this.state.gameBoxHeight) {
        this.setState(prevState =>  ({
          anagramPositionTop: prevState.anagramPositionTop + 10
        })
      )
    } else {
      clearInterval(intervalId);
    }
  };

  setInterval(moveAnagram, 500)

}

// do the setInterval inside the state of the gameBox and then p[ass through the props into the anagram component so the rerender will not matter.

render() {

  //  setInterval(() => {
  //    this.setState({
  //      anagramPositionTop: this.state.anagramPositionTop + 5
  //    })
  //    console.log('triggered');
  // }, 2000)

  return (
    <Aux>
      <p style={{pointer: 'cursor'}} onClick={this.startIntervalHandler}>Start</p>

      <div ref={ (gameBox) => this.gameBox = gameBox} className="my-3 game-box">

        <div ref={ (anagram) => this.anagram = anagram}>
          <Anagram
            anagram="anagram"
            top={this.state.anagramPositionTop}
            xy={this.state.anagramPositionXY}
            />
        </div>

        <div ref={ (inputBox) => this.inputBox = inputBox} className="game-answer d-flex justify-content-center align-items-center">
          <input type="text"  />
        </div>

      </div>
    </Aux>
  )
}
}

export default GameBox
