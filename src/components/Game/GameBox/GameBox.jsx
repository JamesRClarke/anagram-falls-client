import React, {Component} from 'react';
import Anagram from './Anagram/Anagram';
import Aux from '../../../hoc/Aux';

class GameBox extends Component {
  state = {
    gameBoxHeight: 0,
    gameBoxWidth: 0,
    anagrams: ['anagram one', 'anagram two', 'anagram three', 'anagram four'],
    anagramComponents: [],
    counter: 0
  }

  componentDidMount() {
    const height = this.gameBox.clientHeight - this.inputBox.clientHeight - 35;
    const width = this.gameBox.clientWidth;
    this.setState({
      gameBoxHeight: height,
      gameBoxWidth: width
    })
  }

  startIntervalHandler = () => {
    let pushAnagram = () => {
      let intervalId = null;
      let counter = this.state.counter;
      if (counter <= this.state.anagrams.length - 1) {
        console.log('if');
        let selectedAnagram = this.state.anagrams[counter];
        let anagramComponents = this.state.anagramComponents;
        anagramComponents.push(selectedAnagram);
        this.setState({
          anagramComponents: anagramComponents,
          counter: counter + 1
        })
      } else {
        console.log('else');
        clearInterval(intervalId);
      }
    }

    setInterval(pushAnagram, 5000);
  }



render() {

  return (
    <Aux>
      <p style={{pointer: 'cursor'}} onClick={this.startIntervalHandler}>Start</p>

      <div ref={ (gameBox) => this.gameBox = gameBox} className="my-3 game-box">

        {this.state.anagramComponents.map((component) => {
          return <Anagram anagram={component} key={component} playingWidth={this.state.gameBoxWidth} playingHeight={this.state.gameBoxHeight} />
        })}

        <div ref={ (inputBox) => this.inputBox = inputBox} className="game-answer d-flex justify-content-center align-items-center">
          <input ref={ (inputBox) => this.inputBox = inputBox} type="text"  />
        </div>

      </div>
    </Aux>
  )
}
}

export default GameBox
