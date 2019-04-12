import React from 'react';


const anagram = (props) => {
console.log(props.position);
    return (
      <div >
        <p className="game-anagram" style={{top: `${props.position}px`}}>{props.anagram}</p>
      </div>
    )
}

export default anagram
