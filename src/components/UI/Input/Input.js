import React from 'react';
import InputError from './InputError/InputError'

const input = (props) => {
  let inputElement = null;
  let validitiyClass = '';
  let errorMessage = null;

  if (props.formSubmission) {
    if(!props.valid && props.shouldValidate && props.value !== ' ') {
      console.log('triggered');
      validitiyClass  = 'invalid';
      errorMessage = <InputError>{props.errorMessage}</InputError>
    }
  }

  switch (props.elementType) {

    case ('input'):
    inputElement =
    (
      <div>
        <input
          className={validitiyClass}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          />
        {errorMessage}
      </div>
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
    <div className="py-3 px-4" >
      <label>{props.label}</label>
      {inputElement}
    </div>
  )
};

export default input;
