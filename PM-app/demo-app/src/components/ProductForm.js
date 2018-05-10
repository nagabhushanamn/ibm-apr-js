import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveProduct } from '../actions/products.js';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            description: ''
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    handleFormSubmit(e) {
        let { actions } = this.props;
        e.preventDefault();
        let newProduct = {
            code: Math.random(1000),
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        }
        actions.saveProduct(newProduct);
        this.toggleForm();
    }
    handleChange(e) {
        let fieldId = e.target.id;
        let fieldValue = e.target.value;
        this.setState({ [fieldId]: fieldValue });
    }
    disableBtn(stars) {
        if (stars !== 5) return true;
        else return false;
    }
    renderForm() {
        let { isOpen, name, price, description } = this.state;
        if (!isOpen) {
            return (
                <button className="btn btn-info" onClick={() => { this.toggleForm() }}>
                    <i className="fa fa-plus"></i>
                </button>
            );
        } else {
            return (
                <div className="card">
                    <div className="card-header"> Review Form</div>
                    <div className="card-body">
                        <form onSubmit={(e) => { this.handleFormSubmit(e) }}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input className="form-control" id="name" onChange={(e) => { this.handleChange(e) }} value={name} />
                            </div>
                            <div className="form-group">
                                <label>price</label>
                                <input className="form-control" id="price" onChange={(e) => { this.handleChange(e) }} value={price} />
                            </div>
                            <div className="form-group">
                                <label>description</label>
                                <textarea className="form-control" id="description" onChange={(e) => { this.handleChange(e) }} value={description}></textarea>
                            </div>
                            <button className="btn btn-primary">submit</button>
                            <button type="button" className="btn btn-danger" onClick={() => { this.toggleForm() }}>cancel</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-7">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

function mapDispatchToActions(dispatch) {
    let actions = { saveProduct }
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(null, mapDispatchToActions)(ProductForm);