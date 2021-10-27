const Product = require("./prove03/models/product");

const routes = require("express").Router();
product = Product.hasProds;

routes
  .use("/01", require("./prove01"))
  .use("/02", require("./prove02"))
  .use("/03", require("./prove03/routes"))

  .get("/", (req, res, next) => {
    res.render("pages/proveAssignments");
  });

module.exports = routes;
