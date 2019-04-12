import React, {Component} from 'react';
import Anagram from './Anagram/Anagram';

class GameBox extends Component {
  state = {
    startingAnagramPosition: -35,
    gameBoxHeight: null
  }

  componentDidMount() {
    const height = this.gameBox.clientHeight;
    this.setState({
      gameBoxHeight: height
    })
  }

  // do the setInterval inside the state of the gameBox and then p[ass through the props into the anagram component so the rerender will not matter. 

  render() {
    let anagramPos = this.state.startingAnagramPosition;
    let gameBoxHeight = this.state.gameBoxHeight;

    var intervalId = null;
    let moveAnagram = () => {
      if(anagramPos < gameBoxHeight) {
        anagramPos = anagramPos - 5;
         // this.forceUpdate();
      } else {
        clearInterval(intervalId);
      }
    };

    setInterval(moveAnagram, 1000)

    //  setInterval(() => {
    //    this.setState({
    //      anagramPosition: this.state.anagramPosition + 5
    //    })
    //    console.log('triggered');
    // }, 2000)

    return (
      <div ref={ (gameBox) => this.gameBox = gameBox} className="my-3 game-box">

        <Anagram anagram="perfect" position={anagramPos}/>

        <div className="game-answer d-flex justify-content-center align-items-center">
          <input type="text"  />
        </div>



      </div>
    )
  }
}

export default GameBox
