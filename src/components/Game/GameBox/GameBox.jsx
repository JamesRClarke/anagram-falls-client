import React, {Component} from 'react';
import Anagram from './Anagram/Anagram';
import Button from '../../UI/Button/Button'
// import CountDown from './CountDown/CountDown';
import Aux from '../../../hoc/Aux';

import anagramDirectory from '../../../assets/anagrams.json';
import difficultySettings from '../../../assets/difficultySettings.json';

class GameBox extends Component {
  state = {
    gameBoxHeight: 0,
    gameBoxWidth: 0,
    anagrams: null,
    difficulty: null,
    anagramComponents: [],
    counter: 0,
    countdown: 5,
    inputValue: '',
    correctAnswers: 0,
    lives: 5,
    answer: null,
    endGame: false
  }

  componentDidMount() {
    const height = this.gameBox.clientHeight - this.inputBox.clientHeight - 35;
    const width = this.gameBox.clientWidth;

    let chosenAnagrams = anagramDirectory[this.props.category];
    let difficultyChoice = difficultySettings[this.props.difficulty];

    this.setState({
      anagrams: chosenAnagrams,
      difficulty: difficultyChoice,
      gameBoxHeight: height,
      gameBoxWidth: width
    })
  }

  startIntervalHandler = () => {
    this.inputField.focus();
    // let startCountdown = () => {
    //   let countdown = this.state.countdown;
    //   console.log(countdown);
    //   this.setState({
    //     countdown: countdown - 1
    //   })
    // }
    // setInterval(startCountdown(), 1000);

    let pushAnagram = () => {
      let counter = this.state.counter;
      if (counter <= this.state.anagrams.length - 1 && this.state.lives >= 1) {
        let selectedAnagram = this.state.anagrams[counter];
        let anagramComponents = this.state.anagramComponents;
        anagramComponents.push(selectedAnagram);
        this.setState(prevState => ({
          anagramComponents: anagramComponents,
          counter: prevState.counter + 1
        }))
      } else {
        clearInterval(this.interval);
      }
    }
    setTimeout(() => pushAnagram(), 3000); //this is to have the countdown for the game to begin

    setTimeout(() => this.interval = setInterval(pushAnagram, this.state.difficulty.anagramGenerateFrequency), (3000 + this.state.difficulty.anagramGenerateFrequency));
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value.toLowerCase()});
  }

  updateIncorrectAnswers = () => {
    this.setState({
      lives: this.state.lives - 1
    })
    if (this.state.lives <= 0) {
      this.setState({
        anagramComponents: []
      })
    }
  }

  anagramChecker = (event) => {
    event.preventDefault();
    let answer = this.state.inputValue;
    let comparisonArray = this.state.anagramComponents;
    for (let i = 0; i <= comparisonArray.length; i++) {
      if (answer  === comparisonArray[i] ) {
        this.setState({
          inputValue: '',
          answer: answer,
          correctAnswers: this.state.correctAnswers + 1
        })
        setTimeout(() => {comparisonArray.splice(i,1)}, 3000)
        return true;
      }

      this.setState({
        inputValue: '',
      })
    }
  }


  render() {
    return (
      <Aux>
        <div className="d-flex align-items-center justify-content-around">
          <p>Difficulty: {this.props.difficulty}</p>

          <Button clicked={this.startIntervalHandler}  class="btn basic">Start!</Button>

          <p>Category: {this.props.category}</p>
        </div>


        <div ref={ (gameBox) => this.gameBox = gameBox} className="game-box">

          {this.state.anagramComponents.map((component) => {
            return(
              <Anagram
                key={component}
                updateIncorrectAnswers={this.updateIncorrectAnswers}
                difficulty={this.state.difficulty}
                answer={this.state.answer}
                anagram={component}
                playingWidth={this.state.gameBoxWidth} playingHeight={this.state.gameBoxHeight} />
            )
          })}

          <div ref={ (inputBox) => this.inputBox = inputBox} className="game-answer d-flex justify-content-center align-items-center">
            <div className="mx-5">
              <p>Lives: {this.state.lives}</p>
            </div>
            <div className="mx-5">
              <form onSubmit={this.anagramChecker}>
                <input
                  ref={ (inputField) => this.inputField = inputField}
                  type="text"
                  value={this.state.inputValue} onChange={this.handleChange} />

                <input style={{display: 'none'}} type="submit" value="Submit" />

              </form>
            </div>
            <div className="mx-5">
              <p>Score: {this.state.correctAnswers}</p>
            </div>
          </div>

        </div>
      </Aux>
    )
  }
}

export default GameBox
