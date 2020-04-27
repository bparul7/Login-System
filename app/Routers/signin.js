const express = require ('express');
const route = express.Router();
const control = require ('../Controller/control.js');

route.get ('/signin', control.FindTwo);

module.exports = route;