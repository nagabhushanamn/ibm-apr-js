import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import { Link, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail'

class ProductList extends Component {
    renderProducts() {
        let { products, match } = this.props;
        return products.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.code}</td>
                    <td><Link to={`${match.url}/${item.code}`}>{item.name}</Link></td>
                    <td>&#8377;{item.price}</td>
                    <td><Link to={`/edit/${item.code}`}><i className="fa fa-edit"></i></Link></td>
                    <td><a href="/#"><i className="fa fa-trash"></i></a></td>
                </tr>
            );
        });
    }
    render() {
        let { products } = this.props;
        return (
            <div>
                <div className="card">
                    <div className="card-header">Product List</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProducts()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />
                <Route path={this.props.match.url + "/:code"}
                       render={(props) => <ProductDetail {...props} products={products} />} />
            </div>
        );
    }
}

export default ProductList;