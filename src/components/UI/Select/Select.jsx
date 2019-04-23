import React from 'react';

const select = (props) => (
  <div className="filter-container">
    <p >Select {props.type}</p>

    <div
      className={`filter-options ${props.visible ? 'show' : 'hide'}`}>
      {props.options.map((option, index) => {
        return(
          <p
            key={index}
            onClick={() => props.clicked(option, props.type)}>{option}</p>
        )
      })}
    </div>
  </div>
)

export default select
