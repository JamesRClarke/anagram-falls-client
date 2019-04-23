import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux'

class Anagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anagramPosTop: -35,
      anagramPosXY:  Math.ceil((Math.random() * (this.props.playingWidth - 80))),
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

  render() {
    return (
      <Aux >
        <p
          className={`
            ${!this.props.answer || !this.state.fallenAnswer ? 'game-anagram' : null}
            ${this.props.answer === this.props.anagram ? 'correct-answer' : null}
             ${this.state.fallenAnswer ? 'fallen-answer' : null}`}
          style={{
            top: `${this.state.anagramPosTop}px`,
            left: `${this.state.anagramPosXY}px`}}>
            {this.props.anagram}
          </p>
        </Aux>
      )

    }
  }

  export default Anagram
