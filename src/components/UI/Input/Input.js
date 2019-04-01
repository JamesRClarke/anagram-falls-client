import React from 'react';

const input = (props) => {
let inputElement = null;
let validitiyClass = '';

if(!props.valid && props.touched && props.value !== '') {
  validitiyClass  = 'invalid';
}

switch (props.elementType) {

  case ('input'):
  inputElement = <input
    className={validitiyClass}
     {...props.elementConfig}
     value={props.value}
     onChange={props.changed}
      />
  break;

  case ('textarea'):
  inputElement = <textarea
    {...props.elementConfig}
    value={props.value}
    onChange={props.changed}
     />
  break;

  case ('select'):
  inputElement = (
    <select
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
