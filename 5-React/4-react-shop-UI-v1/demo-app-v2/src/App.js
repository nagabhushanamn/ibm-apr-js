import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
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
  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen });
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

  renderProductsOrCart() {
    let { isCartOpen } = this.state;
    if (isCartOpen) return <ViewCart cart={this.state.cart} />
    else return (
      <div className="list-group">
        {this.renderProducts()}
      </div>
    );
  }

  render() {
    let { isCartOpen } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">shopIT</a>
        </nav>
        <hr />
        <i className="fa fa-shopping-cart"></i>
        &nbsp;{Object.keys(this.state.cart).length} item(s) in cart |
        <span className="pull-right">
          <a href="/#" onClick={() => { this.toggleCart() }}>{!isCartOpen ? 'View cart' : 'Show products'}</a>
        </span>
        <hr />
        {this.renderProductsOrCart()}
      </div>
    );
  }
}

export default App;
