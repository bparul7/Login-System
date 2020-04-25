//const dbconfig = require ('../Configure db/connect.js');
//It returns an object
//It is the libraray
const {Sequelize} = require("sequelize");

//forming sequelise object
//Instance of Sequelize, represents a connection
const sequelize = new Sequelize('Login', 'root', 'Gaurav@parul7', {
  host: 'localhost',
  dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

//check connection
sequelize.authenticate().then (() => {
	console.log ("Connected to database")
}).catch ((error) => {
	console.log ("Connection Not established")
})

module.exports = sequelize;