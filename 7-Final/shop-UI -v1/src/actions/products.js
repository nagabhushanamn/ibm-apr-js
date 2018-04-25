
import { LOAD_PRODUCTS } from '../constants';

export function loadProducts() {
    let products = [
        {
            code: "111",
            name: 'Laptop',
            price: 198000,
            description: 'New Mac pro',
            image: 'images/Laptop.png'
        },
        {
            code: "222",
            name: 'Mobile',
            price: 18000,
            description: 'New  pro',
            image: 'images/Mobile.png'
        }
    ]
    return { type: LOAD_PRODUCTS, products };
}