import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

import Button from '../UI/Button/Button';
import Aux from '../../hoc/Aux'

class Oauth extends Component {
  state = {}
  render() {

    return(
      <Aux>
        <Button class="btn github">
          <div className="row align-items-center justify-content-center">
            <div>
              <FaGithub />
              <span className="ml-2">Github</span>

            </div>
          </div>
        </Button>
        <Button class="btn google">
          <div className="row align-items-center justify-content-center">
            <div>
              <FaGoogle />
              <span className="ml-2">Google</span>

            </div>
          </div>
        </Button>
        <Button class="btn facebook">
          <div className="row align-items-center justify-content-center">
            <div>
              <FaFacebook />
              <span className="ml-2">Facebook</span>

            </div>
          </div>
        </Button>
      </Aux>
    )
  }
}

export default Oauth;
