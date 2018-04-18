
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    id: String,
    stars: Number,
    author: String,
    body: String,
    product: { type: Schema.Types.ObjectId, ref: 'Product' }
});

const Review = mongoose.model('Review', reviewSchema, "REVIEWS");
module.exports = Review;