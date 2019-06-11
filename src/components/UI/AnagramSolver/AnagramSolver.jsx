import React from 'react';

const anagramSolver = (props) => {

  let order = [...props.word];
  let orderArray = [];
  order.map((letter, index) => {
    let obj = {
      letter: null,
      correctOrder: null
    }
    obj.letter = letter;
    obj.correctOrder = index;
    return orderArray.push(obj);
  })

  ///////////////////////// this generates the anagram
  let wordAsArray = [...props.word];
  let first = wordAsArray.shift();
  let last  = wordAsArray.pop();
  wordAsArray.sort(() => {
    return .5 - Math.random();
  });
  let arrLength = wordAsArray.length;
  Math.floor(Math.random() * arrLength - 1);
  wordAsArray.splice(Math.floor(Math.random() * arrLength - 1), 0, first);
  wordAsArray.splice(Math.floor(Math.random() * arrLength - 2), 0, last);
  wordAsArray = [...wordAsArray];

  orderArray.map((order) => {
    wordAsArray.map((letter, index) => {
      if(order.letter === letter) {
        order.order = index;
      }
      return true;
    })
    return true;
  })
  /////////////////////////////////////

  /////////////////// this creates the array of spans
  let generateWordAsSpans = (arr, orderSelection) => {
    let spans = []
    arr.map((obj, index) => {
      let el = <span className={`order-${obj[orderSelection]}`} key={index} >{obj.letter}</span>;
        return spans.push(el);
      })
      return spans;
    }

    let correctSpelling = generateWordAsSpans(orderArray, 'correctOrder');
    let incorrectSpelling = generateWordAsSpans(orderArray, 'order');
    console.log(props);
    return (
      <div >
        <p className="d-flex flex-row inline-text-link" onMouseEnter={props.onMouseEnterHandler} onMouseLeave={props.onMouseLeaveHandler}>{props.boolean ? incorrectSpelling : correctSpelling}</p>
      </div>
    )
  }

  export default anagramSolver;
