import React from 'react';
import {NavLink} from 'react-router-dom';

const navItem = (props) => {
  return (

      <li className={`order-${props.order} w-100 pl-md-5 pl-md-0 py-md-0 py-4`} >
         <NavLink to={props.link} activeClassName="active" >{props.name} </NavLink>
      </li>

  )
}

export default navItem;
