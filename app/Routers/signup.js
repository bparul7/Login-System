const express = require ('express');
const route = new express.Router();
const control = require ('../Controller/control.js');

route.get ('/signup', control.FindOne);
route.post ('/createuser', control.CreateUser);

module.exports = route;