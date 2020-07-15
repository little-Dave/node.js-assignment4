const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const users = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (request, response, next) => {
  response.render("form");
})

app.post("/", (request, response, next) => {
  users.push(request.body.name);
  response.redirect("/");
})

app.get("/users", (request, response, next) => {
  response.send(users.join(", "));
})

app.listen(3000 || process.env.PORT);