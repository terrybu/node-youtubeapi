var https = require('https');

//https://www.googleapis.com/youtube/v3/videos?part=id%2C+statistics%2C+snippet&id=gYQeESkdOkg&fields=items&key={YOUR_API_KEY}

// var options = {
// 	host: 'www.googleapis.com',
// 	path: '/youtube/v3/videos?part=id%2C+statistics%2C+snippet&id=gYQeESkdOkg&fields=items&key=AIzaSyCdMoZiea0Z96EhH8cc3No7KJHv2rjey_c',
// 	method: 'GET'
// };

// var req = https.request(options, function(res) {
//   // console.log("statusCode: ", res.statusCode);
//   // console.log("headers: ", res.headers);
//   res.on('data', function(d) {
//     process.stdout.write(d);
//   });
// });
// req.end();

// req.on('error', function(e) {
//   console.error(e);
// });

function call_stats_one_video (videoid) {
	console.log("Calling Terry's call_stats_one_video function with video ID: " + videoid + "!");
	var API_KEY = 'AIzaSyCdMoZiea0Z96EhH8cc3No7KJHv2rjey_c';
	var options = {
	host: 'www.googleapis.com',
	path: '/youtube/v3/videos?part=id%2C+statistics%2C+snippet&id=' + videoid + '&fields=items(ageGating%2CcontentDetails%2CconversionPings%2CfileDetails%2Cid%2CliveStreamingDetails%2CmonetizationDetails%2Cplayer%2CprocessingDetails%2CprojectDetails%2CrecordingDetails%2Csnippet%2Cstatistics%2Cstatus%2Csuggestions%2CtopicDetails)&key=' + API_KEY,
	method: 'GET'
};
	var req = https.request(options, function(res) {
	  // console.log("statusCode: ", res.statusCode);
	  // console.log("headers: ", res.headers);
	  res.on('data', function(d) {
	    process.stdout.write(d);
	  });
	});
	req.end();

	req.on('error', function(e) {
	  console.error(e);
	});
}

call_stats_one_video('pwbZEWlL8_Q');