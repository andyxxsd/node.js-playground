var http = require('http');
// var options = {
//   hostname: 'wen.lu',
//   port: 80,
//   path: '/upload',
//   method: 'POST'
// };

// var req = http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });

// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });

// // write data to request body
// req.write('data\n');
// req.write('data\n');
// req.end();

http.createServer(function(request, response){
	response.writeHead(200);
	response.write(JSON.stringify(request.headers));
	response.write(request.headers["remote-address"]||"Failed");
	response.end();
}).listen(8080);