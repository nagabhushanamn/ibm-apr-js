const express = require('express')
const router = express.Router();

const Product = require('../model/Product');
const Review = require('../model/Review');

// GET : /products
router.get("/", function (req, res, next) {
    Product.find((err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    });
})
// POST : /products
router.post("/", express.json(), function (req, res, next) {
    const product = new Product(req.body);
    product.save((err, result) => {
        if (err) throw err;
        res.status(201).json(result)
    });
})


// POST : /products/{productId}/reviews
router.post("/:productId/reviews", express.json(), function (req, res, next) {
    let productId = req.params.productId;
    const review = new Review(req.body);
    review.product = productId;
    review.save((err, result) => {
        if (err) throw err;
        res.status(201).json(result);
    })
})


// GET : /products/{productId}/reviews
router.get("/:productId/reviews", express.json(), function (req, res, next) {
    let productId = req.params.productId;
    Review.find({ product:productId }, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
})

module.exports = router;