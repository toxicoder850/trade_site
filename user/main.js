var objPeople = [
	{ // Object @ 0 index
		email: "demo@test.com",
		password: "demo"
	},
	{ // Object @ 1 index
		email: "mic@mic.org",
		password: "demouser"
	},
	{ // Object @ 2 index
		username: "demo@xyz.com",
		password: "password"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			window.location.href = "http://";
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}