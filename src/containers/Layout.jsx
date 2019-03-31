import React, {Component} from 'react';

import Aux from '../hoc/Aux'
import Header from '../components/Header/Header'


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
        <Header>
        </Header>
      </Aux>
    )
  }

}

export default Layout;
