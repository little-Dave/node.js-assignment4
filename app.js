const express = require('express');

const app = express();

app.get("/", (request, response, next) => {
  response.send("<h1>Hello, world</h1>");
})

app.listen(3000 || process.env.PORT);