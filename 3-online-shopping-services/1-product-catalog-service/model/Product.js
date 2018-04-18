
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: String,
    name: String,
    price: Number,
    image: String,
    description: String
});

const Product = mongoose.model('Product', productSchema, "PRODUCTS");
module.exports = Product;