import React from 'react';

import NavItem from './NavItem/NavItem';


const navigationItems = (props) => {
  const navItems  = [

    {
      name: 'Lets Play!',
      link: '/game',
      order: 1
    },
    {
      name: 'Leaderboards',
      link: '/leaderboard',
      order: 2
    },
    {
      name: 'How do I play ?',
      link: '/about',
      order: 3
    },
    {
      name: 'Register',
      link: '/register',
      order: 4
    },
    {
      name: 'Sign In',
      link: '/login',
      order: 5
    }
    // {
    //   name: 'My Account',
    //   link: 'profile',
    //   order: 3
    // }
  ]

  let showSideNavItems = 'd-flex p-4 d-md-none';
  if (!props.sideNavigation){
    showSideNavItems = 'd-md-flex d-none';
  }

  const navLinks = navItems.map((item) =>
  <NavItem
    clicked={props.clicked}
    order={item.order}
    name={item.name}
    link={item.link}
    key={item.order} />
)
return (
  <div className={`${showSideNavItems} justify-content-around align-items-center flex-md-row flex-column`}>
    {navLinks}
  </div>
)
}

export default navigationItems;
