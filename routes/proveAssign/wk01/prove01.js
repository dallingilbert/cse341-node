const fs = require("fs");
const { rawListeners } = require("process");

const express = require("express");

let users = ["Dallin", "Joe", "Jimmy", "John"];

const router = express.Router();

router.get("/", (req, res, next) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Enter Message</title><head>");
  res.write("<body><p>Welcome to my page!</p>");
  res.write(
    '<form action="/prove01/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
  res.write("</body>");
  res.write("</html>");
  if (url === "/prove01/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title><head>");
    res.write("<ul>");
    for (let i = 0; i < users.length; i++) {
      res.write("<li>");
      res.write(users[i]);
      res.write("</li>");
    }
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
  }
  if (url === "/prove01/create-user") {
    const body = [];
    console.log("here!");
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      users.push(user);
      console.log(user);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
});

router.get("prove01/users", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Assignment 1</title><head>");
  res.write("<u>");
  for (let i = 0; i < users.length; i++) {
    res.write("<li>");
    res.write(users[i]);
    res.write("</li>");
  }
  res.write("</ul>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

// res.setHeader("Content-Type", "text/html");
// res.write("<html>");
// res.write("<head><title>My First Page</title><head>");
// res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
// res.write("</html>");
// res.end();

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

module.exports = router;
