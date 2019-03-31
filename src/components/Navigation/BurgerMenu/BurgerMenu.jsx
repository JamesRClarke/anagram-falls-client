import React from 'react';


const burgerMenu = (props) => {
return (
    <div onClick={props.clicked} className={`burger d-block d-md-none ${props.open ? `openMenu` : null}`}>
      <div className="bar1" ></div>
      <div className="bar2" ></div>
      <div className="bar3" ></div>
    </div>
)
}

export default burgerMenu;
