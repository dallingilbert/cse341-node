const routes = require("express").Router();

routes
  .use("/restAPI", require("./feed"))
//   .use("/02", require("./prove02"))
//   .use("/03", require("./prove03/routes"))

  .get("/", (req, res, next) => {
    res.render("pages");
  });

module.exports = routes;
