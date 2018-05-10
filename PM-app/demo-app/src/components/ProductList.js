import React, { Component } from 'react';
import { connect } from 'react-redux';
class ProductList extends Component {
    renderProducts() {
        let { products } = this.props;
        products = products || [];
        return products.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td><i className="fa fa-edit"></i></td>
                    <td><a href="/#"><i className="fa fa-trash"></i></a></td>
                </tr>
            );
        });
    }
    render() {
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
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}
export default connect(mapStateToProps, null)(ProductList);