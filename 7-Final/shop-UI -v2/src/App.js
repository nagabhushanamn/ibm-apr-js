import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { connect } from 'react-redux';

class App extends Component {
  renderProductItems() {
    let { products } = this.props;
    return products.map((item, idx) => {
      return (<Product key={idx}
        product={item}
        onBuy={(item) => { this.addToCart(item) }} />);
    })
  }
  renderProducts() {
    return (
      <div className="list-group">
        {this.renderProductItems()}
      </div>
    )
  }
  renderStatus() {
    let { nwStatus } = this.props;
    if (nwStatus.message) {
      return (
        <span className="badge badge-danger"> {nwStatus.message} </span>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <nav className="navbar navbar-light bg-light">
              <Link className="navbar-brand" to="/">shopIT</Link>
              <ul className="navbar-nav navbar-right">
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    <i className="fa fa-sign-in"></i>Login
                  </Link>
                </li>
              </ul>
            </nav>
            <hr />
            <i className="fa fa-shopping-cart"></i>
            <span>&nbsp;{Object.keys(this.props.cart).length} item(s) in cart </span>
            |
            <Link className="" to="/">View Products</Link>
            <Link className="pull-right" to="cart">View cart</Link>
            <hr />

            {this.renderStatus()}

            <Route exact path="/"
              render={() => this.renderProducts()} />
            <Route path="/cart"
              render={() => <ViewCart cart={this.props.cart} />} />
            <Route path="/login" component={Login} />

          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
    nwStatus: state.nwStatus
  }
}

export default connect(mapStateToProps, null)(App);
