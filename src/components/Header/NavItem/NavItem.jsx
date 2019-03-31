import React from 'react';

const navItem = (props) => {

  return (
    <li className={props.classes} >
        {props.name}
    </li>
  )
}

export default navItem;
