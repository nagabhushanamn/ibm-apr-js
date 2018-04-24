import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ViewCart extends Component {
    renderCartItems() {
        let { items } = this.props;
        return items.map((item, idx) => {
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    items in cart
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-sm">
                        <tbody>
                            {this.renderCartItems()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
ViewCart.propTypes = {
    items: PropTypes.array
}

export default ViewCart;