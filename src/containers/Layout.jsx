import React, {Component} from 'react';

import Aux from '../hoc/Aux'
import Navigation from '../components/Header/Navigation'


class Layout extends Component {
  // state = {
  //   showSideDraw: false
  // }
  //
  // sideDrawClosedHandler = () => {
  //   this.setState({
  //     showSideDraw: false
  //   })
  // }
  //
  // sideDrawToggleHandler = () => {
  //   this.setState( (prevState) => {
  //     return {showSideDraw: !prevState.showSideDraw }
  //   })
  // }



  render() {
    return (
      <Aux>
        <Navigation>
        </Navigation>
      </Aux>
    )
  }

}

export default Layout;
