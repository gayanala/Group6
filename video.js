/**
 * author : Sreenivasa
 */
var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'video/mp4'});
	var rs = fs.createReadStream("tom.mp4");
	rs.pipe(response);
	console.log('Express server listening on port 3005');
}).listen(3005);
