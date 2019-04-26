import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux'

class Anagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anagram: this.anagramCreator(this.props.anagram),
      anagramPosTop: -35,
      anagramPosXY:  Math.ceil((Math.random() * (this.props.playingWidth - 90))),
      fallenAnswer: false
    }
  }

  componentDidMount() {
    let intervalId;
    let moveAnagram = () => {
      if(this.state.anagramPosTop <= this.props.playingHeight) {
        this.setState({
          anagramPosTop: this.state.anagramPosTop + 30
        })
      } else {
        clearInterval(intervalId);
        this.props.updateIncorrectAnswers();
        this.setState({
          fallenAnswer: true
        })

      }
    };
    setInterval(moveAnagram, 1000);
  }

  anagramCreator = (value) => {
    let numberOfWords = value.split(' ').length;
    let anagramGenerated = '';
    for(let i = 0; i <= numberOfWords - 1; i++) {
      let word = value.split(' ')[i];
      word = word.split('').sort(() => {
        return 0.5 - Math.random();
      }).join('') + ' ';
      anagramGenerated = anagramGenerated + word;
    }
    return anagramGenerated ;
  }

  render() {
    return (
      <Aux >
        <p
          className={`
            ${!this.props.answer || !this.state.fallenAnswer ? 'game-anagram' : null}
            ${this.props.answer  === this.props.anagram  ? 'correct-answer' : null}
             ${this.state.fallenAnswer ? 'fallen-answer' : null}`}
          style={{
            top: `${this.state.anagramPosTop}px`,
            left: `${this.state.anagramPosXY}px`}}>
            {this.state.anagram}
          </p>
        </Aux>
      )

    }
  }

  export default Anagram
