import React, {Component} from 'react';
import Anagram from './Anagram/Anagram';
import Button from '../../UI/Button/Button'
// import CountDown from './CountDown/CountDown';
import Aux from '../../../hoc/Aux';

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
    answer: null
  }

  componentDidMount() {
    const height = this.gameBox.clientHeight - this.inputBox.clientHeight - 35;
    const width = this.gameBox.clientWidth;
    this.setState({
      gameBoxHeight: height,
      gameBoxWidth: width
    })
  }

  componentWillReceiveProps() {
    this.setState({
      anagrams: this.props.category,
      difficulty: this.props.difficulty
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
      let intervalId = null;
      let counter = this.state.counter;
      if (counter <= this.state.anagrams.length - 1) {
        let selectedAnagram = this.state.anagrams[counter];
        let anagramComponents = this.state.anagramComponents;
        anagramComponents.push(selectedAnagram);
        this.setState(prevState => ({
          anagramComponents: anagramComponents,
          counter: prevState.counter + 1
        }))
      } else {
        clearInterval(intervalId);
      }
    }
    // setTimeout(() => pushAnagram(), 3000); //this is to have the countdown for the game to begin

    setTimeout(() => setInterval(pushAnagram, 2000), 100);
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value});
  }

  updateIncorrectAnswers = () => {
    this.setState({
      lives: this.state.lives - 1
    })
  }

  anagramChecker = (event) => {
    event.preventDefault();
    let answer = this.state.inputValue;
    let comparisonArray = this.state.anagramComponents;
    for (let i = 0; i <= comparisonArray.length; i++) {
      if (answer === comparisonArray[i]) {
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
        <div className="d-flex justify-content-center">
          <div onClick={this.startIntervalHandler} >
          <Button  class="btn basic">Start!</Button>
          </div>
        </div>


        <div ref={ (gameBox) => this.gameBox = gameBox} className="game-box">

          {this.state.anagramComponents.map((component) => {
            return(
              <Anagram
                key={component}
                updateIncorrectAnswers={this.updateIncorrectAnswers}
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
