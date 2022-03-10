//jshint esversion:6

const express = require('express');

const app = express();

//"/" represents the home route
app.get("/", function(request, response){
    response.send("<h1>Hello World</h1");
});

//req stands for request, res stands for response
app.get("/contact", function(req, res) {
    res.send("Contact me at:  booyeah@gmailio.com");
});

app.get("/about", function(req, res) {
    res.send("Hi, my name is (not slim shady), Ramiro.");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Coding</li><li>Beer</li><li>Farming</li></ul>")
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});

