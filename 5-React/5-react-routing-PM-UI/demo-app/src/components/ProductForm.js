import React, { Component } from 'react';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            name: '',
            price: '',
            description: ''
        }
    }
    handleChange(e) {
        let field = e.target.id;
        let fieldValue = e.target.value;
        this.setState({ [field]: fieldValue });
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let product = {
            code: this.state.code,
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        }
        this.props.onFormSubmit(product);
        //this.props.history.push('/all')
    }
    render() {
        return (
            <div>
                <div className="col-6 col-sm-6 col-md-6">
                    <div className="card">
                        <div className="card-header">Product From</div>
                        <div className="card-body">
                            <form onSubmit={(e) => { this.handleFormSubmit(e) }}>
                                <div className="form-group">
                                    <label>Code:</label>
                                    <input className="form-control" id="code" onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input className="form-control" id="name" onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <input type="number" className="form-control" id="price" onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Description:</label>
                                    <textarea className="form-control" id="description" onChange={(e) => this.handleChange(e)}></textarea>
                                </div>
                                <button className="btn btn-primary">save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductForm;