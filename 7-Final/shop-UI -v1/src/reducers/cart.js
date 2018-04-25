import { BUY } from '../constants';

export function cartReducer(state = {}, action) {
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
                    [item.code]: { item, qty: itemLine.qty + 1 }
                }
            }
            return Object.assign({}, state, itemLine)
        }
        default:
            return state
    }
}

