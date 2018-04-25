const express = require('express')
const router = express.Router();

const Product = require('../model/Product');
const Review = require('../model/Review');

//-------------------------------------------
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

//------------------------------------------------------
// GET : /products
router.get("/", function (req, res, next) {
    // Product.find((err, result) => {
    //     if (err) throw err;
    //     res.status(200).json(result);
    // });
    setTimeout(()=>{
        res.status(200).json(products);
    },5000);
})
//------------------------------------------------------
// GET : /products/{productId}
router.get("/:productId", express.json(), function (req, res, next) {
    let productId = req.params.productId;
    Product.findById(productId, (err, result) => {
        if (err) throw err;
        res.status(201).json(result)
    });
})
//------------------------------------------------------
// PUT : /products/{productId}
router.put("/:productId", express.json(), function (req, res, next) {
    let productId = req.params.productId;
    Product.findByIdAndUpdate(productId, req.body, function (err, result) {
        if (err) throw err;
        res.status(200).json(result)
    })
})
//------------------------------------------------------
// DELETE : /products/{productId}
router.delete("/:productId", express.json(), function (req, res, next) {
    let productId = req.params.productId;
    Product.findByIdAndRemove(productId, function (err, result) {
        if (err) throw err;
        res.status(200).json(result)
    })
})
//------------------------------------------------------
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
//------------------------------------------------------
// GET : /products/{productId}/reviews
router.get("/:productId/reviews", express.json(), function (req, res, next) {
    let productId = req.params.productId;
    Review.find({ product: productId }, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
})
//------------------------------------------------------
// GET : /products/{productId}/reviews
router.get("/:productId/reviews/:reviewId", express.json(), function (req, res, next) {
    let productId = req.params.productId;
    let reviewId = req.params.reviewId;
    Review.findByIdAndRemove(reviewId, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
})
//------------------------------------------------------

module.exports = router;