import React, { Component } from 'react';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
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
  
  renderProducts() {
    let { products, currentTab } = this.state;
    return products.map((item, idx) => {
      return (<Product key={idx} product={item} />);
    })
  }
  render() {

    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">shopIT</a>
        </nav>
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
