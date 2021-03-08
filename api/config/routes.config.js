const express = require('express');

const router = express.Router();
const products = require('../controllers/products.controller');

router.get('/products', products.list);
router.post('/products', products.create);
router.get('/products/:id', products.get);
router.put('/products/:id', products.update);
router.delete('/products/:id', products.delete);


module.exports = router;
