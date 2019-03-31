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
    console.log('triggered');
    this.setState( (prevState) => {
      return { showSideNav: !prevState.showSideNav }
    })
  }

  render() {
    return (
      <Aux>
        <Router>
          <Navigation clicked={this.toggleSideNavHandler} open={this.state.showSideNav}/>
          <SideNavigation clicked={this.toggleSideNavHandler} open={this.state.showSideNav}/>
          <main className="px-5 py-4 my-2 mx-3 mx-auto">
          <Route path="/game" component={Play}/>
          <Route path="/leaderboard" component={Leaderboards}/>
          <Route path="/about" component={About}/>
          <Route path="/register" component={Register}/>
          <Route path="/sign-in" component={SignIn}/>
          </main>
        </Router>
      </Aux>
    )
  }

}

export default Layout;
