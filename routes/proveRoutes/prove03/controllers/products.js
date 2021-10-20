const products = [];

exports.getProducts = (req, res, next) => {
    console.log('retrieving products');
    res.render('pages/proveAssignments/prove03', {
        path: '/proveAssignments',
        pageTitle: 'Shop',
        prods: products,
        hasProds: products.length > 0
    });
}

exports.getAddProduct = (req, res, next) => {
    console.log('adding a product!');
    res.render('pages/proveAssignments/prove03/add-product', {
        path: '/add-product',
        pageTitle: 'Add Product',
    });
}

exports.postAddProduct = (req, res, next) => {
    console.log('adding a product!(post)');
    products.push({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        description: req.body.description
    });
    res.redirect('/proveAssignments/03');
}

exports.products = products;