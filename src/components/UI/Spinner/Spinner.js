import React from 'react';

const spinner = (props) => (
  <div>
    <h4>{props.message}</h4>
    <div className="loader"></div>
  </div>
);

export default spinner;
