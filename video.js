/**
 * author : Sreenivasa
 */
var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'video/mp4'});
	var rs = fs.createReadStream("tom.mp4");
	rs.pipe(response);
}).listen(3005);

console.log('Server listening on port 3005');
