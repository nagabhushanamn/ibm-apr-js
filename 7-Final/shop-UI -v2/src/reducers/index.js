
import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { reviewsReducer } from './reviews';
import { cartReducer } from './cart';
import { networkStatus } from './network-status';

export default combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    nwStatus: networkStatus
});