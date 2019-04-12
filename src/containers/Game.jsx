import React, {Component} from 'react';

import Aux from '../hoc/Aux'
import  GameFilters from  '../components/Game/GameFilters/GameFilters';
import  GameBox from '../components/Game/GameBox/GameBox';

class Game extends Component {

  render() {
    return (
      <Aux >
        <div className="game-container container">
          <GameFilters />
          <GameBox />
        </div>

      </Aux>
    )
  }

}

export default Game;
