import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const navigation = (props) => {
  return (
    <header>
      <nav className="px-5 pb-5 pt-4 d-flex justify-content-between align-items-center">
          <div>
            Home
          </div>

          <NavigationItems show={props.open} sideNavigation={false}/>

        <BurgerMenu clicked={props.clicked} open={props.open}/>

      </nav>
    </header>
  )
}

export default navigation;
