import React from 'react';


class Anagram extends Component {
  constructor(props) {
    super(props);
    state = {
      anagramPosTop: -35,
      anagramPosXY: createRandomXYPos()
    }
  }
  
  createRandomXYPos = () => {
    return Math.ceil((Math.random() * (props.playingWidth - 80)));
  }


  let intervalId;
  let moveAnagram = () => {
    if(anagramPosTop <= props.playingHeight) {
      return anagramPosTop = anagramPosTop + 5;

    } else {
      clearInterval(intervalId);
    }
  };
  setInterval(moveAnagram, 500);

  return (
    <div >
      <p
        className="game-anagram"
        style={{top: `${anagramPosTop}px`, left: `${anagramPosXY}px`}}>
        {props.anagram}
      </p>
    </div>
  )
}

export default anagram
