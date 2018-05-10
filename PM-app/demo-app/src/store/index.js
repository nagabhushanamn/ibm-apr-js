


import { createStore } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

let middleware = [thunk];
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const initialState = {
    products: []
};

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middleware),
));

export default store;