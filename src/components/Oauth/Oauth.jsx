import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';

import Button from '../UI/Button/Button';
import Aux from '../../hoc/Aux'

class Oauth extends Component {
  state = {}
  render() {

    return(
      <Aux>
        <Button class="btn github"> Github</Button>
        <Button class="btn google"> Google</Button>
        <Button class="btn facebook"> Facebook</Button>
      </Aux>
    )
  }
}

export default Oauth;
