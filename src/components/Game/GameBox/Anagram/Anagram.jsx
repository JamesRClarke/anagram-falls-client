import React from 'react';


const anagram = (props) => {
  let anagramPosTop = props.top;
  let anagramPosXY = props.xy;
  console.log(props);
  return (
    <div >
      <p className="game-anagram" style={{top: `${anagramPosTop}px`, left: `${anagramPosXY}px`}}>{props.anagram}</p>
    </div>
  )
}

export default anagram
