import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux'

class Anagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anagram: this.anagramCreator(this.props.anagram),
      anagramPosTop: -35,
      anagramPosXY:  Math.ceil((Math.random() * (this.props.playingWidth - 100))),
      fallenAnswer: false,
      score: 100
    }
  }


  moveAnagram = () => {
    if(this.state.anagramPosTop <= this.props.playingHeight - 5) {
      this.setState({
        score: this.state.score - 10,
        anagramPosTop: this.state.anagramPosTop + this.props.difficulty.marginDrop
      })
    } else {
      this.setState({
        fallenAnswer: true
      })

      this.props.updateIncorrectAnswers();
      clearInterval(this.interval);
    }
  };

  componentDidMount() {
    this.interval = setInterval(this.moveAnagram, this.props.difficulty.anagramDropSpeed);
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
    return anagramGenerated;
  }

  render() {
    return (
      <Aux >
        <p
          className={`
            ${!this.props.answer || !this.state.fallenAnswer ? 'game-anagram' : null}
            ${this.props.answer  === this.props.anagram  ? 'correct-answer' : null}
            ${this.state.fallenAnswer ? 'fallen-answer' : null} transition: all ${this.props.difficulty.transitionSpeed};`}
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
