const express = require ('express')
const app = express();
const signin_route = require ('./Routers/signin.js');
const signup_route = require ('./Routers/signup.js');
const changepass_route = require ('./Routers/changepassword.js');

const port = process.env.PORT || 4000

//configure express to parse all incoming json data
app.use(express.json());

app.get ('/', (req, res) => {
	res.send ("Hey!! How are u doing")
})

app.use (signin_route);
app.use (signup_route);
app.use (changepass_route);

app.listen (port, () => {
	console.log ("Server is up on port" + port)
})