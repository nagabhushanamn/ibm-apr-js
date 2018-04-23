import React, { Component } from 'react';
import Greeting from './components/Greeting';
import Box from './components/Box';
import Product from './components/Product';
import Employee from './components/Employee';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    this.state = {
      message: 'welcome'
    }
  }
  changeMessage(message) {
    this.setState({ message })
  }
  renderGreeting() {
    if (this.state.message) {
      return <Greeting message={this.state.message} />
    } else {
      return null;
    }
  }
  render() {
    console.log('App :: render()');
    return (
      <div className="container">
        <hr />
        <h1> React Component's lifecycle </h1>
        <hr />
        <button onClick={() => this.changeMessage('good morning')}>Good Morning</button>
        <button onClick={() => this.changeMessage('good noon')}>Good Noon</button>
        <button onClick={() => this.changeMessage('good evening')}>Good Evening</button>
        <button onClick={() => this.changeMessage('')}>Remove Greeting</button>
        <hr />
        {this.renderGreeting()}
        <hr />
        <Box>
          <Product />
          <Product />
          <Product />
        </Box>
        <Box>
          <Employee />
          <Employee />
          <Employee />
        </Box>
      </div>
    );
  }
}

export default App;
