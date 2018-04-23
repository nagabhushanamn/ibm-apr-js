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
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-4 col-sm-3 col-md-3">
              <img className="img-fluid" src={product.image} alt="product"/>
            </div>
            <div className="col-8 col-sm-9 col-md-9">
              <h4>{product.name}</h4>
              <h5>&#8377;{product.price}</h5>
              <p>{product.description}</p>
              <button className="btn btn-primary">buy</button>
            </div>
          </div>
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
