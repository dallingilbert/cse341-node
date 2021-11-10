// Our initial setup (package requires, port number setup)
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000
const routes = require("./routes");

const app = express();

app
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST",
      "PUT",
      "PATCH",
      "DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
  })
  .use(bodyParser.json()) // application/json
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  //.use(bodyParser({ extended: false })) // For parsing the body of a POST
  .use("/", routes)
  .get("/", routes)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
