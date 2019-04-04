import React from 'react';

const inputError = (props) => {

  return (
    <div className="py-3 px-4 input-error" >
      <p>{props.children}</p>
    </div>
  )
};

export default inputError;
