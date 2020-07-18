const express = require('express');

const router = express.Router();

const addUser = require('./add-user');

router.get("/users", (request, response, next) => {
  // response.send(addUser.allUsers);
  response.render("users", {
    allUsers: addUser.allUsers,
    docTitle: "Users"
  })
})

module.exports = router;