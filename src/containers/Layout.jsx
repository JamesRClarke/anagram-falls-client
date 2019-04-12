import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Aux from '../hoc/Aux';

import Navigation from '../components/Navigation/Navigation';
import SideNavigation from '../components/Navigation/SideNavigation';
import Authentication from './Authentication';
import Game from './Game';


import Home from '../components/Home/Home';
import Leaderboards from '../components/Leaderboards/Leaderboards';
import About from '../components/About/About';


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
          <SideNavigation clicked={this.toggleSideNavHandler} open={this.state.showSideNav}/>
          <main className="my-5">

          <Route path="/" exact component={Home}/>
          <Route path="/game" component={Game}/>
          <Route path="/leaderboard" component={Leaderboards}/>
          <Route path="/about" component={About}/>
          <Route path="/register" component={Authentication}/>
          <Route path="/login" component={Authentication}/>
          </main>
        </Router>
      </Aux>
    )
  }

}

export default Layout;
