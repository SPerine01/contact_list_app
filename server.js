var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(2016);
console.log("Server running on port 2016");