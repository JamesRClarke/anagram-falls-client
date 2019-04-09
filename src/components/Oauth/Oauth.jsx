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
          <div className="row mx-auto align-items-center justify-content-center">
            <div className="col-12 offset-7 offset-md-6 text-left">
              <FaGithub />
              <span className="ml-3">Github</span>

            </div>
          </div>
        </Button>
        <Button class="btn google">
          <div className="row mx-auto align-items-center justify-content-center">
            <div className="col-12 offset-7 offset-md-6 text-left">
              <FaGoogle />
              <span className="ml-3">Google</span>

            </div>
          </div>
        </Button>
        <Button class="btn facebook">
          <div className="row mx-auto align-items-center justify-content-center">
            <div className="col-12 offset-7 offset-md-6 text-left">
              <FaFacebook />
              <span className="ml-3">Facebook</span>

            </div>
          </div>
        </Button>
      </Aux>
    )
  }
}

export default Oauth;
