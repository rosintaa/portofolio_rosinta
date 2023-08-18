const port = 3003;
const express = require('express');
const server = express();
const path = require('path');
const bodyParser = require('body-parser');
const sintaController = require('./controller/sintaController');

server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: false }))
server.set("view engine", "ejs")

server.use(sintaController);

server.listen(port)