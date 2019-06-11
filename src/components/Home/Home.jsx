import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Aux from '../../hoc/Aux'

class About extends Component {
  state = {
    pro: false,
    virgin: false
  }

  chooseStatus = (chosenStatus, otherStatus) => {
      this.setState({
        [chosenStatus]: !this.state[chosenStatus],
        [otherStatus]: false,
      })

  }

  render() {
    let statusText = null;
    if (this.state.virgin) {
      statusText = (
        <Aux>
          <p>First time?<br></br> Don't panic, we've all been there...</p>
          <p>Its a simple game, with anagrams to solve, lives to lose, high scores to beat whats not to love ? </p>
          <p>You seem smart, best to read <Link className="inline-text-link" to="/about">how to play </Link>first, unless you're confident then jump <Link className="inline-text-link" to="/game">straight in.</Link></p>
        </Aux>
      );
    } else {
      statusText = (
        <Aux>
          <p>You're a pro are you?<br></br>You know how to play?<br></br> Well what the f*** are doing here then? <br></br><Link className="inline-text-link" to="/game"> "show me what you got"</Link> </p>
        </Aux>
      );
    }
    return (
      <Aux>
        <div className="container text-center" >

          <h3>Welcome to Anagram Falls</h3>

          <h3>I am a...</h3>
          <div className="row my-4">

            <div className="col-12 col-md-6">
              <h5 onClick={() => this.chooseStatus('virgin', 'pro')} className={`inline-text-link ${this.state.virgin ? `active` : null }`}>Anagram Falls Virgin</h5>
            </div>

            <div className="col-12 col-md-6">
              <h5 onClick={() => this.chooseStatus('pro', 'virgin')} className={`inline-text-link ${this.state.pro ? `active` : null }`}>Anagram Falls Professional </h5>
            </div>

          </div>

          {this.state.virgin || this.state.pro ?  <div className="row my-5">
            <div className="col-9 mx-auto status-box p-5">
              {statusText}
            </div>
          </div> : null}

        </div>
      </Aux>
    )
  }

}


export default About;
