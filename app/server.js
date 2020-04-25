const express = require ('express')
const app = express();

//configure database and create model
const User = require ('./Models/usermodel.js'); //connection to database + Table creation

const port = process.env.PORT || 4000

//configure express to parse all incoming json data
app.use(express.json());

app.get ('/', (req, res) => {
	res.send ("Hey!! How are u doing")
})

app.listen (port, () => {
	console.log ("Server is up on port" + port)
})