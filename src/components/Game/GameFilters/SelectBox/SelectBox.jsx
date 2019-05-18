import React from 'react';
import { FaAngleRight } from "react-icons/fa";
const select = (props) => (
  <div onClick={() => props.viewSettings(props.type)} className="filter-container d-flex align-items-center">
    <div>
      Select {props.type}
    </div>
    <div>
      <FaAngleRight/>
    </div>
    <div
      className={`filter-options ${props.visible ? 'show' : 'hide'}`}>
      {props.options.map((option, index) => {
        return(
          <p
            key={index}
            onClick={() => props.chooseSettings(option, props.type)}>{option}</p>
        )
      })}
    </div>
  </div>
)

export default select
