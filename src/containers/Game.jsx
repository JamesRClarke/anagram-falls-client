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

  chooseGameSettings = (selection, type) => {
    this.setState({
      [type].value: selection
    })
  }

  showDifficultiesHandler = () => {
    this.setState(prevState => ({
      showDifficulties: !prevState.showDifficulties
    }))
    return this.state.showDifficulties;
  }

  showCategoriesHandler = () => {
    this.setState(prevState => ({
      showCategories: !prevState.showCategories
    }))
    return this.state.showCategories;
  }

  render() {
    return (
      <Aux >
        <div className="game-container container">
          <GameFilters
            clicked={this.chooseGameSettings}
            showDifficulties={this.state.showDifficulties}
            showCategories={this.state.showCategoriesHandlers}
            difficultyOptions={['easy', 'medium', 'hard', 'are you feeling ok?']}
            categoryOptions={['Burma', 'Thailand']}
            />
          <GameBox
            difficulty={this.state.difficulty} category={this.state.category} />
        </div>

      </Aux>
    )
  }

}

export default Game;
