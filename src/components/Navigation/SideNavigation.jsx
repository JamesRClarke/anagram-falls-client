import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
// import BurgerMenu from './BurgerMenu/BurgerMenu';

const navigation = (props) => {
  return (
    <header>
      <nav className={`sideNav d-md-none py-5 px-4 ${props.open ? `openNav` : `closeNav`}`}>
        <NavigationItems sideNavigation={true} clicked={props.clicked} />
      </nav>
    </header>
  )
}

export default navigation;
