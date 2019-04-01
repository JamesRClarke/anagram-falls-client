import React from 'react';
import {NavLink} from 'react-router-dom';

const navItem = (props) => {
  return (

      <li onClick={props.clicked} className={`order-${props.order} pl-md-5 pl-md-0 py-md-0 py-4`} >
         <NavLink to={props.link} activeClassName="active" >{props.name} </NavLink>
      </li>

  )
}

export default navItem;
