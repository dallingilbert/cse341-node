const express = require("express");
const router = express.Router();

const products = [];

router.get("/", (req, res, next) => {
    res.render('pages/proveAssignments', {
        path: '/02',
        pageTitle: 'Shop',
        prods: products,
        hasProds: products.length > 0
    });
});

router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        description: req.body.description
    });
    res.redirect('/proveAssignments/02');
});

router.get("/add-product", (req, res, next) => {
    res.render('pages/proveAssignments/prove02/add-product', {
        path: '/add-product',
        pageTitle: 'Add Product',
    });
});

router.get('/admin/add-product', (req, res, next) => {

});


module.exports = router;