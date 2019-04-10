import React, {Component} from 'react';

import Aux from '../../hoc/Aux'
import  GameFilters from  './GameFilters/GameFilters';
import  GameBox from './GameBox/GameBox';

class Game extends Component {

  render() {
    return (
      <Aux>
        <div className="game-container">
          <GameFilters />
          <GameBox />
        </div>

      </Aux>
    )
  }

}

export default Game;
