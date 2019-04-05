import React from 'react';

import Aux from '../../../../hoc/Aux'

const inputError = (props) => {

  return (
    <Aux >
      <p className="input-error" >{props.children}</p>
    </Aux>
  )
};

export default inputError;
