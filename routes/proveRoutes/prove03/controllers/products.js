const Product = require('../models/product');

let productCount = 0;

exports.getAddProduct = (req, res, next) => {
    console.log('adding a product!');
    res.render('pages/proveAssignments/prove03/add-product', {
        path: '/add-product',
        pageTitle: 'Add Product',
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    productCount++;
    console.log('adding a product!(post)');
    res.redirect('/proveAssignments/03/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    console.log('retrieving products');
    res.render('pages/proveAssignments/prove03/prove03', {
        path: '/prove03',
        pageTitle: 'Shop',
        prods: products,
        hasProds: products.length > 0
    });
}

exports.productCount = productCount;