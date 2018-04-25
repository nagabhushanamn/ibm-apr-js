import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import { buy } from '../actions/cart';

class ViewCart extends Component {

    handleChange(e, item) {
        let qty = e.target.value;
        store.dispatch(buy(item, Number.parseInt(qty)));
    }
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
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td><input 
                          onChange={(e) => { this.handleChange(e, item) }} size="2" type="number" 
                          value={qty} /></td>
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
                <div className="col-10 col-sm-12 col-md-12">
                    <div className="card">
                        <div className="card-header">items in cart</div>
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