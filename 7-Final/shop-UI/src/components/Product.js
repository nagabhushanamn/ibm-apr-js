import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Review from './Review'
import ReviewForm from './ReviewForm';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
            reviews: []
        }
    }
    changeTab(tabIndex) {
        let { product } = this.props;
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let api = `http://localhost:8080/products/${product._id}/reviews`;
                fetch(api)
                    .then(response => response.json())
                    .then(reviews => this.setState({ reviews }));
            }
        });
    }
    handleNewReview(review) {
        let { product } = this.props;
        let api = `http://localhost:8080/products/${product._id}/reviews`;
        fetch(api, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(r => {
                let { reviews } = this.state;
                reviews = reviews.concat(r);
                this.setState({ reviews });
            });

    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review key={idx} review={review} />
        });
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
                card = (
                    <div>
                        {this.renderReviews()}
                        <hr />
                        <ReviewForm onNewReview={(review) => { this.handleNewReview(review) }} />
                    </div>
                )
                break;
            default:
                card = null;
        }
        return card;
    }
    handleBuyBtnClick() {
        let { product, onBuy } = this.props;
        onBuy(product);
    }
    render() {
        let { product } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-4 col-sm-3 col-md-3">
                            <img className="img-fluid" src={product.image} alt="product" />
                        </div>
                        <div className="col-8 col-sm-9 col-md-9">
                            <h4>{product.name}</h4>
                            <h5>&#8377;{product.price}</h5>
                            <button
                                onClick={() => { this.handleBuyBtnClick() }} className="btn btn-primary">buy</button>
                            <hr />
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={classnames('nav-link', { active: currentTab === 1 })} href="/#" onClick={() => { this.changeTab(1) }}>Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classnames('nav-link', { active: currentTab === 2 })} href="/#" onClick={() => { this.changeTab(2) }}>Specification</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classnames('nav-link', { active: currentTab === 3 })} href="/#" onClick={() => { this.changeTab(3) }}>Reviews</a>
                                </li>
                            </ul><br />
                            {this.renderTabCard(product)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Product.propTypes = {
    product: PropTypes.object.isRequired,
    onBuy: PropTypes.func
}
export default Product;