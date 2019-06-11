import React from 'react';
import Button from '../../../UI/Button/Button';

const Selection = (props) => {
  // props.continue(true);
  return (
    <div className="selection-box p-2 w-100 w-md-25 d-flex d-md-block alig-items-center justify-content-around">
      <p className="text-sm-p p-3 no-margin d-inline-block">Chosen difficulty: <span className="color-green"> {props.difficulty}</span></p>
      <p className="text-sm-p p-3 no-margin d-inline-block">Chosen category: <span className="color-green">{props.category}</span></p>

      { props.category && props.difficulty ?
        <div >
        <Button clicked={ props.continue} class="btn basic-inverse">Continue</Button></div>
        : null
      }
    </div>
  )

}

export default Selection;
