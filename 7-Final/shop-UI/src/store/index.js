

import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {
    products: [
        {
            code: "000",
            name: 'sample',
            price: 0.0,
            description: 'sample item',
            image: 'images/no-image.png'
        },
    ]
};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;