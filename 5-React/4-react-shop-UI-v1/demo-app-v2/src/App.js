import React, { Component } from 'react';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          image: 'images/Laptop.png'
        },
        {
          id: 2,
          name: 'Mobile',
          price: 18000,
          description: 'New  pro',
          image: 'images/Mobile.png'
        }
      ]
    };
  }

  addToCart(item) {
    this.setState({ cart: this.state.cart.concat(item) });
  }

  renderProducts() {
    let { products } = this.state;

    return products.map((item, idx) => {
      return (<Product key={idx} 
                       product={item} 
                       onBuy={(item) => { this.addToCart(item) }} />);
    })

    // or

    // let arr = [];
    // products.forEach((item, idx) => {
    //   let p = <Product key={idx} product={item} />
    //   arr.push(p)
    // });
    // return arr;

  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">shopIT</a>
        </nav>
        <hr />
        <i className="fa fa-shopping-cart"></i>
        &nbsp;{this.state.cart.length} item(s) in cart
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
