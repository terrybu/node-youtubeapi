var Youtube = require("youtube-api");
var express = require("express");
var fs = require("fs");

Youtube.authenticate({
	type: "key",
	key: 'AIzaSyCdMoZiea0Z96EhH8cc3No7KJHv2rjey_c'
});
var content;
var test;
Youtube.search.list({
    "part": "snippet",
    "q": '런닝맨',
    "maxResults": 5
}, function (err, data) {
	content = data.items;
    console.log(content);
});

var app = express();
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get("/", function(req, res) {
    res.render('template.ejs', {
    	title: "YouTube API Test Practice Node Express",
    	content: content
    });
});

app.listen(3000);
console.log("Server running");