import React, {Component} from 'react';

import Aux from '../hoc/Aux'
import  GameFilters from  '../components/Game/GameFilters/GameFilters';
import  GameBox from '../components/Game/GameBox/GameBox';

class Game extends Component {
  state = {
    difficulty: {
      value: null,
      inView: false
    },
    category: {
      value: null,
      inView: false
    },
    showDifficulties: false,
    showCategories: false
  }

  chooseGameSettingsHandler = (selection, type) => {
    this.viewGameOptionsHandler(type)
    let stateObj = this.state[type];
    stateObj.value = selection;
    this.setState({
      [type]: stateObj
    })
  }

  viewGameOptionsHandler = (type) => {
    let stateObj = this.state[type];
    stateObj.inView = !stateObj.inView;
    this.setState({
      [type]: stateObj
    })
  }


  render() {
    return (
      <Aux >
        <div className="game-container container">
          <GameFilters
            categorySelection={this.state.category.value}
            difficultySelection={this.state.difficulty.value}
            chooseSettings={this.chooseGameSettingsHandler}
            viewSettings={this.viewGameOptionsHandler}
            difficultyView={this.state.difficulty.inView}
            categoryView={this.state.category.inView}
            difficultyOptions={['easy', 'medium', 'hard', 'are you feeling ok?']}
            categoryOptions={['Burma', 'Thailand']}
            />
          <GameBox
            difficulty={this.state.difficulty}
             category={this.state.category}
              />
        </div>

      </Aux>
    )
  }

}

export default Game;
