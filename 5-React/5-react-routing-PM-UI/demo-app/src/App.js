import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import Home from './components/Home'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          code: 111,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          image: 'images/Laptop.png'
        },
        {
          code: 222,
          name: 'Mobile',
          price: 18000,
          description: 'New  pro',
          image: 'images/Mobile.png'
        }
      ]
    }
  }

  handleFormSubmit(product) {
    let { products } = this.state;
    this.setState({ products: products.concat(product) }, () => {
      this.props.history.push('/products')
    });
  }

  render() {
    let { products } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/">PM</Link>
        </nav>
        <hr />
        <div className="row">
          <div className="col-3 col-sm-3 col-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/products">View-All</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new">Add-New</Link>
              </li>
            </ul>
          </div>
          <div className="col-9 col-sm-9 col-9">
            <Route exact path="/" component={Home} />
            <Route  path="/products" render={(props) => <ProductList {...props} products={products} />} />
            <Route  path="/new" render={(props) => <ProductForm {...props} onFormSubmit={(product) => { this.handleFormSubmit(product) }} />} />
            <Route  path="/edit/:code" render={(props) => <ProductForm {...props} onFormSubmit={(product) => { this.handleFormSubmit(product) }} />} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
