const express = require('express');

const router = express.Router();

const users = [];

router.get("/", (request, response, next) => {
  response.render("add-user", {
    docTitle: "Add User"
  });
})

router.post("/", (request, response, next) => {
  users.push({name: request.body.name});
  response.redirect("/");
})

module.exports = {
  routes: router,
  allUsers: users
}