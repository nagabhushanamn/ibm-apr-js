
let apiURL = "http://localhost:8080/api/products";

export function loadProducts() {
    return function (dispatch) {
        fetch(apiURL)
            .then(response => response.json())
            .then(products => {
                dispatch({ type: 'LOAD_PRODUCTS', products });
            })
    }
}

export function saveProduct(product) {
    return function (dispatch) {
        fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then(product => {
                dispatch({ type: 'SAVE_PRODUCT', product });
            })
    }
}