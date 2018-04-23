import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro'
        },
        {
          id: 2,
          name: 'Mobile',
          price: 18000,
          description: 'New  pro'
        }
      ]
    };
  }
  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <h4>{product.name}</h4>
          <h5>&#8377;{product.price}</h5>
          <p>{product.description}</p>
          <button className="btn btn-primary">buy</button>
        </div>
      );
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
