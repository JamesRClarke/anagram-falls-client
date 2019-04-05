import React from 'react';

import Aux from '../../../hoc/Aux'

import InputError from './InputError/InputError'

const input = (props) => {
  let inputElement = null;
  let validitiyClass = '';
  let errorMessage = <InputError></InputError>;
  let passowordStrengthChecker = null

  if (props) {
    passowordStrengthChecker  = true;
  }

    if(!props.valid && props.shouldValidate && props.value !== '') {
      validitiyClass  = 'invalid';
      errorMessage = <InputError>{props.errorMessage}</InputError>
    } else if (props.valid){
      validitiyClass = 'valid';
    }


  switch (props.elementType) {

    case ('input'):
    inputElement =
    (
      <Aux>
        <input
          className={validitiyClass}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          />
        {passowordStrengthChecker}
        {errorMessage}

      </Aux>
    )
    break;

    case ('textarea'):
    inputElement = <textarea
      className={validitiyClass}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
      />
    break;

    case ('select'):
    inputElement = (
      <select
        className={validitiyClass}
        value={props.value}
        onChange={props.changed}
        >
        {props.elementConfig.options.map(option => (
          <option
            key={option.value}
            value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
    )
    break;

    default:
    inputElement = <input
      className={validitiyClass}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
      />
  }
  return (
    <div className="py-3 px-4">
      <label>{props.label}</label>
      {inputElement}
    </div>
  )
};

export default input;
