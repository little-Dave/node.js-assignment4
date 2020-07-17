const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const addUser = require('./routes/add-user');
const users = require('./routes/users');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));

app.use(addUser.routes);

app.use(users);

app.listen(3000 || process.env.PORT);