console.log('-index.js-');
import 'bootstrap/dist/css/bootstrap.css';

import { combineReducers, createStore } from 'redux';

//------------------------------------------
// Action(s)
const INCREMENT = "increment";
const DECREMENT = "decrement";
const BUY = "buy";

//-------------------------------------------
// Action creator(s)
function increment(value) {
    return { type: INCREMENT, value };
}
function decrement(value) {
    return { type: DECREMENT, value };
}
function buy(item, qty) {
    return { type: BUY, item, qty };
}
//------------------------------------------
// Reducer(s)

function counterRedecuer(state = { count: 0 }, action) {
    console.log('counterReducer');
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, { count: state.count + action.value });
        case DECREMENT:
            return Object.assign({}, state, { count: state.count - action.value });
        default:
            return state;
    }
}

function cartReducer(state = {}, action) {
    console.log('cart reducer');
    switch (action.type) {
        case BUY: {
            let item = action.item;
            let qty = action.qty;
            let itemLine;
            if (!state[item.code]) {
                itemLine = {
                    [item.code]: { item, qty }
                }
            } else {
                itemLine = state[item.code];
                itemLine = {
                    [item.code]: { item, qty: itemLine.qty + qty }
                }
            }
            return Object.assign({}, state, itemLine)
        }
        default:
            return state
    }
}

//------------------------------------------

const rootReducer = combineReducers({
    counter: counterRedecuer,
    cart: cartReducer
});

//------------------------------------------

// store
const initialState = {
    counter: { count: 100 },
    cart: {
        "111": {
            item: { code: '111', name: 'Laptop', price: 1000 },
            qty: 2
        }
    }
};
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//------------------------------------------

// View ( with plain-js )
let incBtn = document.querySelector('.btn-success');
let decBtn = document.querySelector('.btn-danger');
let totalCountEle = document.querySelector('.badge');
let buyBtn1 = document.getElementById('buyBtn1');
let buyBtn2 = document.getElementById('buyBtn2');
let lapQty = document.getElementById('lapQty');
let mobQty = document.getElementById('mobQty');

incBtn.addEventListener('click', () => {
    store.dispatch(increment(1));
});
decBtn.addEventListener('click', () => {
    store.dispatch(decrement(1));
})
buyBtn1.addEventListener('click', () => {
    let qty = lapQty.value;
    let q = qty ? qty : 1;
    store.dispatch(buy({ code: '111', name: 'Laptop', price: 3000 }, Number.parseInt(q)));
});
buyBtn2.addEventListener('click', () => {
    let qty = mobQty.value;
    let q = qty ? qty : 1;
    store.dispatch(buy({ code: '222', name: 'Mobile', price: 3000 }, Number.parseInt(q)));
});
lapQty.addEventListener('change', () => {
    let qty = lapQty.value;
    let q = qty ? qty : 1;
    store.dispatch(buy({ code: '111', name: 'Laptop', price: 3000 }, Number.parseInt(q)));
})

let counterState = store.getState().counter;
totalCountEle.innerText = counterState.count;

store.subscribe(() => {
    console.log('view subscribing state changes');
    let counterState = store.getState().counter;
    totalCountEle.innerText = counterState.count;
});
