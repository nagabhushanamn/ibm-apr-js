const express = require('express')
const router = express.Router();

router.get("/", function (req, res, next) {
    res.send('product-catalog-service');
})

module.exports = router;