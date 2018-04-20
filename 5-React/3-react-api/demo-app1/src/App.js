import React, { Component } from 'react';
import './App.css';
import ActionButton from './components/ActionButton'
import TotalCountDisplay from './components/TotalCountDisplay'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    //console.log(props);
    this.state = {
      totalCount: 100
    }
  }
  incrementTotalCount() {
    let { totalCount } = this.state
    this.setState({ totalCount: totalCount + 1 });
  }
  render() {
    console.log('App :: render()');
    let { title } = this.props;
    let { totalCount } = this.state
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">{title}</a>
        </nav>
        <hr />
        <div className="card">
          <div className="card-header">counter app - <span className="badge badge-danger">{totalCount}</span></div>
          <div className="card-body">
            <ActionButton value="1" onAction={() => { this.incrementTotalCount() }} />
            <ActionButton value="10" onAction={() => { this.incrementTotalCount() }} />
            <ActionButton value="-10" onAction={() => { this.incrementTotalCount() }} />
            <ActionButton value="-1" onAction={() => { this.incrementTotalCount() }} />
            <div style={{ clear: 'both' }}>
              <TotalCountDisplay value={totalCount} />
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
