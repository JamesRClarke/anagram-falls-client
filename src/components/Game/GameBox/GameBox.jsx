import React, {Component} from 'react';
import Anagram from './Anagram/Anagram';
// import CountDown from './CountDown/CountDown';
import Aux from '../../../hoc/Aux';

class GameBox extends Component {
  state = {
    gameBoxHeight: 0,
    gameBoxWidth: 0,
    anagrams: ['anagram one', 'anagram two', 'anagram three', 'anagram four', 'anagram five', 'anagram six', 'anagram seven', 'anagram eight'],
    anagramComponents: [],
    counter: 0,
    countdown: 5,
    inputValue: '',
    correctAnswers: 0,
    lives: 5
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
    //
    // let startCountdown = () => {
    //   let countdown = this.state.countdown;
    //   console.log(countdown);
    //   this.setState({
    //     countdown: countdown - 1
    //   })
    // }
    // setInterval(startCountdown(), 1000);


    let pushAnagram = () => {

      let intervalId = null;
      let counter = this.state.counter;
      if (counter <= this.state.anagrams.length - 1) {
        let selectedAnagram = this.state.anagrams[counter];
        let anagramComponents = this.state.anagramComponents;
        anagramComponents.push(selectedAnagram);
        this.setState({
          anagramComponents: anagramComponents,
          counter: counter + 1
        })
      } else {
        clearInterval(intervalId);
      }
    }
    setTimeout(() => pushAnagram(), 5000);
    setTimeout(() => setInterval(pushAnagram, 10000), 15000);
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value});
  }

  anagramChecker = (event) => {
    event.preventDefault();
    let answer = this.state.inputValue;
    let comparisonArray = this.state.anagramComponents;
    for (let i = 0; i < comparisonArray.length; i++) {
      if (answer === comparisonArray[i]) {
        console.log('true');

        comparisonArray.splice(i, 1);
        console.log(comparisonArray);
        this.setState({
          inputValue: '',
          anagramComponents: comparisonArray
        })

        return true;
      }
      this.setState({
        inputValue: ''
      })
      console.log('false');
      return false;
    }

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
            <form onSubmit={this.anagramChecker}>
              <input ref={ (inputBox) => this.inputBox = inputBox} type="text" value={this.state.inputValue} onChange={this.handleChange} />
              <input style={{display: 'none'}} type="submit" value="Submit" />
            </form>
          </div>

        </div>
      </Aux>
    )
  }
}

export default GameBox
