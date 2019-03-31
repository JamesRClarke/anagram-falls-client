import React, {Component} from 'react';

import Aux from '../hoc/Aux'
import Navigation from '../components/Navigation/Navigation'
import SideNavigation from '../components/Navigation/SideNavigation'


class Layout extends Component {
  state = {
    showSideNav: false
  }

  toggleSideNavHandler = () => {
    this.setState( (prevState) => {
      return { showSideNav: !prevState.showSideNav }
    })
  }

  render() {
    return (
      <Aux>
        <Navigation clicked={this.toggleSideNavHandler} open={this.state.showSideNav}/>
        <SideNavigation open={this.state.showSideNav}/>
      </Aux>
    )
  }

}

export default Layout;
