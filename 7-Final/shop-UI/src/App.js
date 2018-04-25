import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import store from './store';
import { loadProducts } from './actions/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      products: []
    };
  }
  addToCart(item) {
    let { cart } = this.state;
    if (cart[item.id]) {
      let itemLine = cart[item.id];
      cart[item.id] = Object.assign({}, itemLine, { qty: itemLine.qty + 1 })
    } else {
      cart[item.id] = { item, qty: 1 }
    }
    this.setState({ cart });
  }

  renderProductItems() {
    let { products } = this.state;
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
  componentDidMount() {
    let products = store.getState().products;
    this.setState({ products });
    store.subscribe(() => {
      let state = store.getState();
      let products = state.products;
      this.setState({ products });
    });
    setTimeout(() => {
      store.dispatch(loadProducts());
    }, 3000);
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
            <span>&nbsp;{Object.keys(this.state.cart).length} item(s) in cart </span>
            |
            <Link className="" to="/">View Products</Link>
            <Link className="pull-right" to="cart">View cart</Link>
            <hr />

            <Route exact path="/"
              render={() => this.renderProducts()} />
            <Route path="/cart"
              render={() => <ViewCart cart={this.state.cart} />} />
            <Route path="/login" component={Login} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
