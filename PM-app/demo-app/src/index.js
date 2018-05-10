import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store'
import { loadProducts } from './actions/products';
import { Provider } from 'react-redux'
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch(loadProducts());