//Model creation + database connection
const User = require ('../Models/usermodel.js');

const control = {
	FindTwo : async(req, res) => {
		try {
			const user = await User.findOne ({
				where: {
					email : req.body.email,
					password : req.body.password,
				}
			})
			console.log (user);
			if (user == null) {
				res.status(500).send("Failure");
			}
			else {
				res.status(200).send("Success");
			}
		}
		catch (err) {
			res.status(404).send("Some Error Ocuured");
		}
	},

	FindOne : async(req, res) => {
		try {
			const user = await User.findOne ({
				where : {
					email : req.body.email
				}
			})
			console.log (user)
			if (user == null) {
				res.status (200).send ("Success : Email donot match, create user");
			}
			else {
				res.status (500).send("Failure : Already Registered, Try to Signin");
			}
		}
		catch (err) {
			res.status (404).send("Some Internal Error Occured");
		}
	},

	CreateUser : async(req, res) => {
		//console.log (req.body)
		try {
			const user = User.build(req.body);
			//console.log (user)
			await user.save();
			res.status (200).send("Success : User was created");
		}
		catch (err) {
			res.status (404).send(err);
		}
	},

	ChangePass : async (req, res) => {
		console.log (req.body)
		try {
			const user = await User.findOne ({
				where: {
					email : req.body.email,
					password : req.body.password,
				}
			})
			if (user == null) {
				res.status(500).send("Failure : Email and password verification Failed");
			}
			else {
				try {
					await User.update({password : req.body.newpassword}, {
						where : {
							email : req.body.email,
							password : req.body.password
						}
					})
					res.status (200).send("Success : password Updated");
				}
				catch (err) {
					res.status (500).send(err);
				}
			}
		}
		catch (err) {
			res.status (404).send ("Some Internal Error Occured");
		}
	}
}

module.exports = control