const createError = require('http-errors');
const Product = require('../models/product.model');

module.exports.list = (req, res, next) => {
  Product.find()
    .then(products => res.json(products))
    .catch(next)
}

module.exports.get = (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(next)
}

module.exports.create = (req, res, next) => {
  Product.create(req.body)
    .then(product => res.status(201).json(product))
    .catch(next)
}

module.exports.update = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })
    .then(product => {
      if (product) res.json(product)
      else next(createError(404, 'Product not found'))
    })
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  Product.findByIdAndDelete(req.params.id)
    .then(product => {
      if (product) res.status(204).json({})
      else next(createError(404, 'Product not found'))
    })
    .catch(next)
}
