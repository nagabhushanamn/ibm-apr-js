
import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants';

export function loadReviews(productCode) {
    //
    let reviews = [
        { stars: 5, author: 'who@email.com', body: 'sample review' }
    ]
    return { type: LOAD_REVIEWS, reviews, productCode };
}

export function addNewReview(productCode, review) {
    //
    return { type: ADD_NEW_REVIEW, review, productCode }
}