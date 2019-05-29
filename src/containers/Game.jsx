import React, {Component} from 'react';

import Aux from '../hoc/Aux'
import  GameFilters from  '../components/Game/GameFilters/GameFilters';
import  GameBox from '../components/Game/GameBox/GameBox';

class Game extends Component {
  state = {
    difficulty: null,
    category: null,
    continue: false
  }



  chooseGameSettingsHandler = (selection, type) => {
    this.setState({
      [type]: selection
    })
  }

  gotToGame = () => {
    this.setState({
      continue: true
    })
  }

  render() {
    return (
      <Aux >
        <div className="game-container container">
          {!this.state.continue ?
            <GameFilters
              difficulty={this.state.difficulty}
              category={this.state.category}
              selectGameOptions={this.chooseGameSettingsHandler}
              continueToGame={this.gotToGame}
              />
            : null
          }
          {this.state.continue ?
            <GameBox
              difficulty={this.state.difficulty}
              category={this.state.category}
              />
            : null
          }
        </div>

      </Aux>
    )
  }

}

export default Game;
