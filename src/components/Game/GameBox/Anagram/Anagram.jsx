import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux'

class Anagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anagramPosTop: -35,
      anagramPosXY:  Math.ceil((Math.random() * (this.props.playingWidth - 50)))
    }
  }

  componentDidMount() {
    let intervalId;
    let moveAnagram = () => {
      if(this.state.anagramPosTop <= this.props.playingHeight) {
        this.setState({
          anagramPosTop: this.state.anagramPosTop + 10
        })
      } else {
        clearInterval(intervalId);
      }
    };

    setInterval(moveAnagram, 1000);
  }

  render() {
    console.log(this.props.answer === this.props.anagram);
  // ${this.props.answer === this.props.anagram ? 'correct-answer' : null }
    return (
      <Aux >
        <p
          className={`game-anagram ${this.props.answer === this.props.anagram ? 'correct-answer' : null }`}
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
