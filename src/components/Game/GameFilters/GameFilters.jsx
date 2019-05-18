import React from 'react';
import Select from './SelectBox/SelectBox';

const GameFilters = (props) => {
  return (
    <div>
      <div className="mb-3 px-4 pt-2 game-filters d-flex justify-content-around align-items-start">

        <Select
          visible={props.difficultyView}
          options={props.difficultyOptions}
          chooseSettings={props.chooseSettings}
          viewSettings={props.viewSettings}
          type="difficulty"/>

        <Select
          visible={props.categoryView}
          options={props.categoryOptions}
          chooseSettings={props.chooseSettings}
          viewSettings={props.viewSettings}
          type="category"/>

      </div>
    </div>
  )
}

export default GameFilters
