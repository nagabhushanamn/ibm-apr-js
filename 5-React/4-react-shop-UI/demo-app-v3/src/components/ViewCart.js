import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ViewCart extends Component {
    renderCartItems() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        this.total = 0;
        return keys.map((key, idx) => {
            let itemLine = cart[key];
            let item = itemLine.item;
            let qty = itemLine.qty;
            this.total += qty * item.price;
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>{qty}</td>
                    <td>&#8377;{item.price * qty}</td>
                </tr>
            );
        });
    }
    renderCart() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        if (keys.length === 0) {
            return (
                <div className="col-5 col-sm-5 col-md-5">
                    <div className="alert alert-info">No item(s) in cart</div>
                </div>
            );
        }
        else {
            return (
                <div className="col-10 col-sm-8 col-md-8">
                    <div className="card">
                        <div className="card-header">
                            items in cart
                </div>
                        <div className="card-body">
                            <table className="table table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Code</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderCartItems()}
                                </tbody>
                            </table>
                            <hr />
                            Total : &#8377;{this.total}
                            <hr />
                            <button className="btn btn-primary">checkout</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        );
    }
}
ViewCart.propTypes = {
    cart: PropTypes.object
}

export default ViewCart;