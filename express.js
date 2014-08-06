var Youtube = require("youtube-api");
var express = require("express");
var fs = require("fs");

Youtube.authenticate({
	type: "key",
	key: 'AIzaSyCdMoZiea0Z96EhH8cc3No7KJHv2rjey_c'
});

var app = express();
app.use( express.static( __dirname + "/public" ) );

app.get("/", function(request, response) {
	var page_content = fs.readFileSync(__dirname + "/public/template.html");
	response.setHeader("Content-Type", "text/html");
	response.send(page_content);
});

app.listen(3000);

var content;

Youtube.search.list({
    "part": "snippet",
    "q": '런닝맨',
    "maxResults": 2
}, function (err, data) {
	content = data.items;
    // console.log(content);
});

console.log("Server running");