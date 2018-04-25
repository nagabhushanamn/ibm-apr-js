import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Review from './Review'
import ReviewForm from './ReviewForm';

import { loadReviews, addNewReview } from '../actions/reviews';
import { buy } from '../actions/cart';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
        }
    }
    changeTab(tabIndex) {
        let { product, actions } = this.props;
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                actions.loadReviews(product.code);
            }
        });
    }
    handleNewReview(review) {
        let { product, actions } = this.props;
        actions.addNewReview(product.code, review);
    }
    renderReviews() {
        let { reviews } = this.props;
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
        let { product, actions } = this.props;
        actions.buy(product, 1);
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
}

function mapStateToProps(state, props) {
    let { product } = props;
    let reviews = state.reviews[product.code]
    return {
        reviews: reviews || []
    }
}
function mapDispatchToProps(dispatch) {
    let actions = { loadReviews, addNewReview, buy };
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);