import React from 'react';
import Selection from './Selection/Selection';
import {Link} from 'react-router-dom';
import anagramDirectory from '../../../assets/anagrams.json';

const GameFilters  = (props) => {
  let selections = [];
  Object.keys(anagramDirectory).map((key) => {
    selections.push(key);
    return selections;
  })
  const listItems = selections.map((topic) =>
  <li
    className="cursor-pointer"
    key={topic}
    onClick={() => props.selectGameOptions(topic, 'category')}>
    {topic}</li>
  );
  // <li className="cursor-pointer" onClick={() => props.selectGameOptions('Capital Cities', 'category')}>Capital Cities</li>
  return (
    <div className="game-filters">
      <Selection continue={props.continueToGame} difficulty={props.difficulty} category={props.category}/>
      <div className="game-options">

        <div className="my-4">
          <h5>Select your chosen difficulty </h5>

          <div className="my-3 d-flex flex-column flex-md-row justify-content-between">
            <p className="cursor-pointer" onClick={() => props.selectGameOptions('easy', 'difficulty')}>Easy</p>
            <p className="cursor-pointer" onClick={() => props.selectGameOptions('medium', 'difficulty')} >Medium</p>
            <p className="cursor-pointer" onClick={() => props.selectGameOptions('hard', 'difficulty')} >Hard</p>
            <p className="cursor-pointer" onClick={() => props.selectGameOptions('insane', 'difficulty')} >Are you Insane ?</p>
          </div>
        </div>


        <div className="my-4">
          <h5>Select your chosen category.</h5>
          <div className="d-flex flex-row justify-content-between">

            <div className="d-flex flex-column px-2 py-2 py-md-4 mr-5">
              <p className="text-md-p">Your Recents</p>
              <ul>

                {listItems}
              </ul>
            </div>
            <div className="d-flex flex-column px-2 py-2 py-md-4 ">
              <p className="text-md-p">Anagram Falls OG's</p>
              <ul>
                <li>category</li>
                <li>category</li>
                <li>category</li>
                <li>category</li>
                <li>category</li>
                <li>category</li>
                <li>category</li>
              </ul>
            </div>

            <div className=" d-flex flex-column px-2 py-2 py-md-4">
              <p className="text-md-p">Most Played</p>
              <ul>
                <li>category</li>
                <li>category</li>
                <li>category</li>
                <li>category</li>
                <li>category</li>
                <li>category</li>
                <li>category</li>
              </ul>
            </div>

          </div>

          <div className="my-4">
            <input className="search" type="search" placeholder="Search for a category" />
          </div>

          <p className="text-sm-p mt-5"> Can't find what you're looking for ? <Link className="inline-text-link" to="/game"> Create </Link> your own category for you and everyone else to enjoy.</p>

        </div>
      </div>
    </div>
  )
}

export default GameFilters
