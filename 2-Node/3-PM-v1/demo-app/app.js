var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var Product = require('./model/Product');

//----------------------------------------------
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pm', () => {
  console.log('connected to mongodb');
});
//----------------------------------------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/new-product-form', function (req, res, next) {
  res.render('product-form');
});
app.post('/save-product', function (req, res, next) {
  var newProduct = new Product();
  Object.assign(newProduct, req.body);
  newProduct.save((product) => {
    res.redirect("/view-all");
  })
});
app.get('/view-all', function (req, res, next) {
  Product.find((err, result) => {
    if (err) next(err);
    res.render('product-list', { products: result })
  });
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
