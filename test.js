var Youtube = require("youtube-api");
var http = require("http");

Youtube.authenticate({
	type: "key",
	key: 'AIzaSyCdMoZiea0Z96EhH8cc3No7KJHv2rjey_c'
});

var content;

Youtube.search.list({
    "part": "snippet",
    "q": '런닝맨',
    "maxResults": 2
}, function (err, data) {
	content = data.items;
    // console.log(content);
});

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	// var contentJSON = JSON.stringify(content[0].id);
	//content[0] will pick out the first video object from query
	//.id just picks out the id property 
	var videoId = content[0].id.videoId;
	var video_url = 'http://www.youtube.com/watch?v=' + videoId;
	response.end('<html><body>' + '<a href=' + video_url + '>' + video_url + '</a>' + '</body></html>'   );
}).listen(1337);

console.log("Server running");