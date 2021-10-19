const express = require("express");
const router = express.Router();

const products = [];

router.get("/", (req, res, next) => {
    res.render('pages/proveAssign/wk02/prove02', {
        path: '/prove02',
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
    res.redirect('/prove02');
});

router.get("/add-product", (req, res, next) => {
    res.render('pages/proveAssign/wk02/add-product', {
        path: '/prove02/add-product',
        pageTitle: 'Add Product',
    });
});

router.get('/admin/add-product', (req, res, next) => {

});


module.exports = router;