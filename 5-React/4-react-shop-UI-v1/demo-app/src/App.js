import React, { Component } from 'react';
import classnames from 'classnames';

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
  changeTab(tabIndex) {
    this.setState({ currentTab: tabIndex });
  }
  renderTabCard(product) {
    let { currentTab } = this.state;
    let card = null;
    switch (currentTab) {
      case 1:
        card = (<div><p>{product.description}</p></div>)
        break;
      case 2:
        card = (<div><p>Not Yet</p></div>)
        break;
      case 3:
        card = (<div><p>None yet</p></div>)
        break;
      default:
        card = null;
    }
    return card;
  }
  renderProducts() {
    let { products, currentTab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-4 col-sm-3 col-md-3">
              <img className="img-fluid" src={product.image} alt="product" />
            </div>
            <div className="col-8 col-sm-9 col-md-9">
              <h4>{product.name}</h4>
              <h5>&#8377;{product.price}</h5>
              <button className="btn btn-primary">buy</button>
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={classnames('nav-link', { active: currentTab === 1 })} href="#" onClick={() => { this.changeTab(1) }}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={classnames('nav-link', { active: currentTab === 2 })} href="#" onClick={() => { this.changeTab(2) }}>Specification</a>
                </li>
                <li className="nav-item">
                  <a className={classnames('nav-link', { active: currentTab === 3 })} href="#" onClick={() => { this.changeTab(3) }}>Reviews</a>
                </li>
              </ul>
              {this.renderTabCard(product)}
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
