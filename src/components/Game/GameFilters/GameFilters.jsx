import React from 'react';
import Select from '../../UI/Select/Select'

const GameFilters = (props) => {
  return (
    <div className="mb-3 px-4 pb-5 game-filters d-flex justify-content-around align-items-center">

      <Select
        visible={props.showDifficulties}
        options={props.difficultyOptions}
        clicked={props.clicked}
        type="difficulty"/>

      <Select
        visible={props.showCategories}
        options={props.categoryOptions}
        clicked={props.clicked}
        type="category"/>
    </div>
  )
}

export default GameFilters
