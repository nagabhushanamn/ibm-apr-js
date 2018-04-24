import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        let code = this.props.match.params.code;
        let product={}; // 
        return (
            <div className="col-6 col-sm-8 col-md-8">
                <div className="card">
                    <div className="card-header">Product Details - {code}</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4 col-sm-3 col-md-3">
                                <img className="img-fluid" src={product.image} alt="product" />
                            </div>
                            <div className="col-8 col-sm-9 col-md-9">
                                <h4>{product.name}</h4>
                                <h5>&#8377;{product.price}</h5>
                                <p>{product.description}</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;