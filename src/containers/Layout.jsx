import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Aux from '../hoc/Aux'

import Navigation from '../components/Navigation/Navigation'
import SideNavigation from '../components/Navigation/SideNavigation'

import Play from '../components/Play/Play'
import Leaderboards from '../components/Leaderboards/Leaderboards'
import About from '../components/About/About'
import Register from '../components/Register/Register'
import SignIn from '../components/SignIn/SignIn'


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

          <Route path="/game" component={Play}/>
          <Route path="/leaderboard" component={Leaderboards}/>
          <Route path="/about" component={About}/>
          <Route path="/register" component={Register}/>
          <Route path="/sign-in" component={SignIn}/>

        </Router>
      </Aux>
    )
  }

}

export default Layout;
