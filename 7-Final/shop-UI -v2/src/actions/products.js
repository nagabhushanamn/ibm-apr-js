
import { LOAD_PRODUCTS } from '../constants';


// Sync Action
// export function loadProducts() {
//     let products = [
//         {
//             code: "111",
//             name: 'Laptop',
//             price: 198000,
//             description: 'New Mac pro',
//             image: 'images/Laptop.png'
//         },
//         {
//             code: "222",
//             name: 'Mobile',
//             price: 18000,
//             description: 'New  pro',
//             image: 'images/Mobile.png'
//         }
//     ]
//     return { type: LOAD_PRODUCTS, products };
// }


// Async Action
export function loadProducts() {
    return function (dispatch) {
        const apiUrl = "http://localhost:8080/products";
        dispatch({ type: 'REQUEST_BEGIN' })
        fetch(apiUrl)
            .then(response => response.json())
            .then(products => {
                dispatch({ type: 'REQUEST_FINISHED' })
                dispatch({ type: LOAD_PRODUCTS, products }) // Async Action
            });
    }
}