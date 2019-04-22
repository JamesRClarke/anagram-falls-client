import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux'

class Anagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anagramPosTop: -35,
      anagramPosXY:  Math.ceil((Math.random() * (this.props.playingWidth - 85)))
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
    return (
      <Aux >
        <p
          className="game-anagram"
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
