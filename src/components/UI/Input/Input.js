import React from 'react';

import Aux from '../../../hoc/Aux'

import InputError from './InputError/InputError'

const input = (props) => {
  let inputElement = null;
  let validitiyClass = '';
  let hasContent = '';
  let errorMessage = <InputError></InputError>;

    if (props.value.length >= 1) {
      hasContent = 'has-content'
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
        <div className="p-4">
          <div className="input-effect">
            <input
              className={`effect-18 ${validitiyClass}`}
              {...props.elementConfig}
              value={props.value}
              onChange={props.changed}
              />
            <label className={hasContent}>{props.label}</label>
            <span className="focus-border"></span>
          </div>
          <div>
            {errorMessage}
          </div>
        </div >
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
      <Aux>
        {inputElement}
      </Aux>
    )
  };

  export default input;
