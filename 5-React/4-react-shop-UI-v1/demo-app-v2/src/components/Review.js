import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Review extends Component {
    render() {
        let { review } = this.props;
        return (
            <div className="row">
                <div className="col-6 col-sm-8 col-md-8">
                    <div className="alert alert-info">
                        <span>{review.stars}</span> &mdash; {review.author}
                        <hr />
                        <p>{review.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}
Review.propTypes = {
    review: PropTypes.object.isRequired
}

export default Review;