import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h1> PM </h1>
        <hr />
        <ProductList />
        <ProductForm />
      </div>
    );
  }
}

export default App;
