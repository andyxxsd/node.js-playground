var server = require('http').createServer();
var io = require('socket.io')(server);

server.listen(8080);
io.on('connection', function(socket){
	console.log("A client is connecting...");
	socket.emit('login', "Successful Connected");
	socket.on('message', function(msg){
		console.log('Message send: '+msg);
		socket.broadcast.emit('message', msg);
	});
});