var Youtube = require("youtube-api");
var express = require("express");
var myModule = require("./simple_http_request.js");
var _ = require('underscore');

Youtube.authenticate({
	type: "key",
	key: 'AIzaSyCdMoZiea0Z96EhH8cc3No7KJHv2rjey_c'
});
var content;
var real_content = [];
Youtube.search.list({
    "part": "id, snippet",
    "q": 'Teriyaki Salmon',
    "order": "viewCount",
    "maxResults": 3,
    "chart": 'mostPopular'
}, function (err, data) {
	content = data.items;
	// console.log(_.isArray(content)); //true meaning that content is an ARRAY so underscore's each is not what's messing up the order for real_content
	_.each(content, function(object) {
		myModule.call_stats(object.id.videoId, function(data) {
			real_content.push(data);
		});	
	});
});


var app = express();
var helpers = require('express-helpers')(app);

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get("/", function(req, res) {
    res.render('template.ejs', {
    	title: "YouTube API Test Practice Node Express",
    	content: content,
    	real_content: real_content
    });
});

app.get("/realcontent", function(req, res) {
    res.json(real_content);
});

app.get("/content", function(req, res) {
    res.json(content);
});

app.listen(3000);
console.log("Server running");