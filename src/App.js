import React, { Component } from 'react';
import Aux from './hoc/Aux';
import Layout from './containers/Layout';


class App extends Component {
  render() {
    return (
      <Aux>
        <Layout></Layout>
      </Aux>
    );
  }
}

export default App;
