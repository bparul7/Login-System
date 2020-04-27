const express = require ('express');
const route = new express.Router();
const control = require ('../Controller/control.js');

route.patch ('/changepass', control.ChangePass);

module.exports = route;