import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const navigation = (props) => {
  return (
    <header>
      <nav className="py-4 px-5 d-flex justify-content-between align-items-center">
          <div className=" logo">
            Logo
          </div>

          <NavigationItems show={props.open} sideNavigation={false}/>

        <BurgerMenu  clicked={props.clicked} open={props.open}/>

      </nav>
    </header>
  )
}

export default navigation;
