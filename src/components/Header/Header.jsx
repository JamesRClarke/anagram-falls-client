import React from 'react';

import NavItem from './NavItem/NavItem';

const header = (props) => {
  const navItems  = [
    {
      name: 'Leaderboards',
      link: 'leaderboard',
      order: 1
    },
    {
      name: 'Play',
      link: 'game',
      order: 0
    },
    {
      name: 'About',
      link: 'about',
      order: 2
    },
    {
      name: 'Register',
      link: 'register',
      order: 3
    },
    {
      name: 'Sign In',
      link: 'sign-in',
      order: 4
    },
    {
      name: 'My Account',
      link: 'profile',
      order: 3
    }
  ]

  const navLinks = navItems.map((item) =>
    <NavItem
      order={item.order}
      classes={`pl-3 order-${item.order}`}
      name={item.name}
      link={item.link}
      key={item.order} />
  )
  return (
    <header>
      <nav className="p-4 d-flex justify-content-between align-items-center">

        <div>
          <NavItem name="Home" />
        </div>

        <div className=" d-flex justify-content-around align-items-center">
          {navLinks}
        </div>
      </nav>
    </header>
  )
}

export default header;
