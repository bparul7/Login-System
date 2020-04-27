//MOdel in sequelise represents a table in a database
//Entity(Table) Information: Attributes, data types
//Model Name, Table Name : Model Name + s (Plural version)

//connect to databse
//sequelise is a connection
const {Sequelize, DataTypes} = require ('sequelize');
const sequelize = require ('../Congigure_db/sequelise.js');

const User = sequelize.define ('User', {
	firstName : {
		type : DataTypes.STRING,
		allowNull : false,
		validate : {
			isName (value) {
				for (let i=0; i<value.length; i++) {
					if (value[i]>='a'&&value[i]<='z')
						continue;
					if (value[i]>='A'&&value[i]<='Z')
						continue;
					throw new Error("Name should contain alphabets only");
				}
			}
		}
	},
	email : {
		type : DataTypes.STRING,
		allowNull : false,
		unique : true,
		validate : {
			isEmail : true
		}
	},
	password : {
		type : DataTypes.STRING,
		allowNull : false,
		trim : true,
		toLowerCase : true,
		validate : {
			isLength (value) {
				if (value.length<5)
					throw new Error ("password too short");
				else if (value.length>14)
					throw new Error ("password too long");
			}
		}
	}
}, {
	//other model options
	//MODel Name = Table Name
	tableName : 'users',
	timestamps: false
});

//User model
//sequelise.models.modelname
//If table Already exits : dropped and created new
 User.sync({ force: true }).then (() => {
 	console.log ("User Table Created")
 }).catch ((error) => {
 	console.log ("User Table NOt created")
 })

 module.exports = User