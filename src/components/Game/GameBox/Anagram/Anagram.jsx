import React, {Component} from 'react';


class Anagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anagramPosTop: -35,
      anagramPosXY:  Math.ceil((Math.random() * (this.props.playingWidth - 80)))
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
    console.log(this.state.anagramPosXY);
    return (
      <div >
        <p
          className="game-anagram"
          style={{
            top: `${this.state.anagramPosTop}px`,
            left: `${this.state.anagramPosXY}px`}}>
          {this.props.anagram}
        </p>
      </div>
    )

  }
}

export default Anagram
