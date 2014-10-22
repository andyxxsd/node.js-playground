var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(request, response){
	var file = fs.createReadStream('./ip.js');
	response.writeHead(200);
	file.pipe(response);
});
server.listen(8080);