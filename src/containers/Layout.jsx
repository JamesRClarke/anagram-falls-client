import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Aux from '../hoc/Aux'

import Navigation from '../components/Navigation/Navigation'
import SideNavigation from '../components/Navigation/SideNavigation'

import About from '../components/About/About'


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
        <Router>
          <Navigation clicked={this.toggleSideNavHandler} open={this.state.showSideNav}/>
          <SideNavigation open={this.state.showSideNav}/>

          <Route path="/about" component={About}/>

        </Router>
      </Aux>
    )
  }

}

export default Layout;
