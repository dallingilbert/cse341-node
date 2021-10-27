const routes = require('express').Router();
const productCount = require('../controllers/products');

routes
    .use('/admin', require("./admin"))
    .use('/shop', require('./shop'))
    .get("/", (req, res, next) => {
        res.render("pages/proveAssignments/prove03/prove03", {
          pageTitle: 'Shop',
          path: '/proveAssignments/03',
          hasProds: productCount.productCount > 0
        });
      });

module.exports = routes;