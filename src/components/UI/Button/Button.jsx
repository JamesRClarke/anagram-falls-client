import React from 'react';

const button = (props) => (
  <div className="py-3 px-4">
    <button
      className={props.class}
      onClick={props.clicked}
      disabled={props.disabled}
      >
      {props.children}
    </button>
  </div>
)

export default button
