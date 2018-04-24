import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},  //itemLine ==> { itemId : {item,qty}}
      products: [
        {
          id: 111,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          image: 'images/Laptop.png'
        },
        {
          id: 222,
          name: 'Mobile',
          price: 18000,
          description: 'New  pro',
          image: 'images/Mobile.png'
        }
      ]
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

  renderProducts() {
    let { products } = this.state;
    return products.map((item, idx) => {
      return (<Product key={idx}
        product={item}
        onBuy={(item) => { this.addToCart(item) }} />);
    })
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <nav className="navbar navbar-light bg-light">
              <Link className="navbar-brand" to="/">shopIT</Link>
            </nav>
            <hr />
            <i className="fa fa-shopping-cart"></i>
            <span>&nbsp;{Object.keys(this.state.cart).length} item(s) in cart </span>
            |
            <Link to="/">View Products</Link>
            <span className="pull-right">
              <Link to="cart">View cart</Link>
            </span>
            <hr />

            <Route exact path="/"
              render={() => (
                <div className="list-group">
                  {this.renderProducts()}
                </div>
              )
              } />
            <Route path="/cart"
              render={() => <ViewCart cart={this.state.cart} />} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
