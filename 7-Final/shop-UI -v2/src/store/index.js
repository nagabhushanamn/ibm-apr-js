

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk'

const initialState = {
    products: [],
    reviews: {},
    nwStatus: {
        message: ''
    }
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk)
);

export default store;