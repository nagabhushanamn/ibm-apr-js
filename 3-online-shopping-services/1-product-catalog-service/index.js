
const express = require('express')
const indexRoute = require('./routes/index')
const productsRoute = require('./routes/products')

const mongoose = require('mongoose');
mongoose.connect('mongodb://user1:user1@ds251179.mlab.com:51179/shop-product-catalog', () => {
    console.log('connected to mongodb');
});


const app = express()
app.use("/", indexRoute);
app.use("/products", productsRoute);



app.listen(3000, () => {
    console.log('product-catalog-service up & running');
})
