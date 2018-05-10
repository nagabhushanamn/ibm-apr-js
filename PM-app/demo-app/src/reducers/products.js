

export function productsReducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return [...action.products]
        case 'SAVE_PRODUCT':
            return [...state, action.product]
        default:
            return state;
    }
}