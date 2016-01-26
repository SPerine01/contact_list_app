var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/contactlist", function (req, res) {
	console.log("This is my GET request")

	person1= {
        name: "May",
        email: "may@gmail.com",
        number: "(347)888-8881"
    };

    person2 = {
        name:"Chris",
        email:"chris@gmail.com",
        number: "(347)888-8882"
    };

    person3={
        name: "Bobby",
        email:"bobby@gmail.com",
        number: "(347)888-8883"
    };

	var contactlist = [person1, person2, person3];
	res.json(contactlist);
});

app.listen(2016);
console.log("Server running on port 2016");