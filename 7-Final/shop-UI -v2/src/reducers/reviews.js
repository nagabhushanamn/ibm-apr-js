
import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants';

export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_REVIEWS: {
            let reviews = action.reviews;
            let productCode = action.productCode;
            return Object.assign({}, state, { [productCode]: [...reviews] });
        }
        case ADD_NEW_REVIEW: {
            let review = action.review;
            let productCode = action.productCode;
            let existingReviews = state[productCode];
            return Object.assign({}, state, { [productCode]: [...existingReviews, review] });
        }
        default:
            return state;
    }
}