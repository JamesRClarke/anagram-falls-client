import React from 'react';

const navItem = (props) => {
  return (
    <li className={`order-${props.order} w-100 pl-md-5 pl-md-0 py-md-0 py-4`} >
        {props.name}
    </li>
  )
}

export default navItem;
