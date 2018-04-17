var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
    name: String,
    price: Number,
    make_date: { type: Date, default: Date.now },
    description: String
});
var Product = mongoose.model('Product', productSchema, 'PRODUCTS');
module.exports = Product