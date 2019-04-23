import React, {Component} from 'react';
import Anagram from './Anagram/Anagram';
// import CountDown from './CountDown/CountDown';
import Aux from '../../../hoc/Aux';

class GameBox extends Component {
  state = {
    gameBoxHeight: 0,
    gameBoxWidth: 0,
    anagrams: ['bagan', 'yangon' ],
    anagramComponents: [],
    counter: 0,
    countdown: 5,
    inputValue: '',
    correctAnswers: 0,
    lives: 5,
    focus: true,
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
      if (counter <= this.state.anagrams.length -1) {
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
    // setTimeout(() => pushAnagram(), 1000); //this is to have the countdown for the game to begin

    setTimeout(() => setInterval(pushAnagram, 2000), 100);
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value});
  }

  anagramChecker = (event) => {
    event.preventDefault();
    console.log(this.state.inputValue);
    let answer = this.state.inputValue;
    let comparisonArray = this.state.anagramComponents;
    for (let i = 0; i < comparisonArray.length; i++) {
      if (answer === comparisonArray[i]) {
        console.log(answer);
        this.setState({
          inputValue: '',
          answer: answer
        })
        console.log(this.state.answer);
        return true;
      }
      this.setState({
        inputValue: ''
      })
      return false;
    }

  }

  render() {
    return (
      <Aux>
        <p style={{cursor: 'pointer', display: 'inline-block'}} onClick={this.startIntervalHandler}>Start</p>

        <div ref={ (gameBox) => this.gameBox = gameBox} className="my-3 game-box">

          {this.state.anagramComponents.map((component) => {
            return(
              <Anagram
                key={component}
                answer={this.state.answer}
                finished={false}
                anagram={component}
                playingWidth={this.state.gameBoxWidth} playingHeight={this.state.gameBoxHeight} />
            )
              })}

              <div ref={ (inputBox) => this.inputBox = inputBox} className="game-answer d-flex justify-content-center align-items-center">
                <form onSubmit={this.anagramChecker}>
                  <input
                    ref={ (inputField) => this.inputField = inputField} type="text"
                    value={this.state.inputValue} onChange={this.handleChange} />

                  <input style={{display: 'none'}} type="submit" value="Submit" />

                </form>
              </div>

            </div>
          </Aux>
        )
      }
    }

    export default GameBox
