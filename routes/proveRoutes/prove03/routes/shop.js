const router = require('express').Router();

const productsController = require('../controllers/products');

router.get('/s', productsController.getProducts);

module.exports = router;