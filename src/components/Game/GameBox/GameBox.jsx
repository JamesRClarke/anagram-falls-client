import React, {Component, Fragment} from 'react';
import Anagram from './Anagram/Anagram';
// import Button from '../../UI/Button/Button'
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
    endGame: false,
    gameInProgress: false
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
    this.setState({
      gameInProgress: true
    })
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
        setTimeout(() => {comparisonArray.splice(i, 1)}, 2000);
        this.setState({
          inputValue: '',
          answer: answer,
          correctAnswers: this.state.correctAnswers + 1,
          comparisonArray: comparisonArray
        })
      }
      this.setState({
        inputValue: '',
      })
    }
  }

  render() {
    return (
      <Fragment>
          <div className="row">
            <p className="col-6 col-md-3">Difficulty: {this.props.difficulty}</p>
            <p className="col-6 col-md-3">Category: {this.props.category}</p>
            <p className="col-6 col-md-3">Lives: {this.state.lives}</p>
            <p className="col-6 col-md-3">Score: {this.state.correctAnswers}</p>
          </div>


        <div ref={ (gameBox) => this.gameBox = gameBox} className="game-box">
          { !this.state.gameInProgress ?
            <div className="start-text">
              <h3 className="inline-text-link" onClick={this.startIntervalHandler}>Start</h3>
            </div>
            : null
          }

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

          <div ref={(inputBox) => this.inputBox = inputBox} className="game-answer d-flex flex-column flex-md-row justify-content-center align-items-center">

            <div className="mx-2 mx-md-5">
              <form onSubmit={this.anagramChecker}>
                <input
                  ref={ (inputField) => this.inputField = inputField}
                  type="text"
                  value={this.state.inputValue} onChange={this.handleChange} />
                <input style={{display: 'none'}} type="submit" value="Submit" />
              </form>
            </div>



          </div>

        </div>
      </Fragment>
    )
  }
}

export default GameBox
