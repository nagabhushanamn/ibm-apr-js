
var express = require('express');
var router = express.Router();
var Product = require('../model/Product');

router.get('/new-product-form', function (req, res, next) {
    res.render('product-form');
});
router.post('/save-product', function (req, res, next) {
    if (req.body.id) {
        Product.findByIdAndUpdate(req.body.id, req.body, (err, product) => {
            res.redirect("/products/view-all");
        })
    } else {
        let product = new Product(req.body);
        product.save((product) => {
            res.redirect("/products/view-all");
        })
    }
});
router.get('/view-all', function (req, res, next) {
    Product.find((err, result) => {
        if (err) next(err);
        res.render('product-list', { products: result })
    });
})
router.get('/delete-product', function (req, res, next) {
    let id = req.query.id;
    Product.remove({ _id: id }, (err) => {
        if (err) throw err;
        res.redirect('/products/view-all');
    })
})
router.get('/edit-product', function (req, res, next) {
    let id = req.query.id;
    Product.findById({ _id: id }, (err, product) => {
        if (err) throw err;
        res.render('product-form', { product });
    })
})


module.exports = router;  